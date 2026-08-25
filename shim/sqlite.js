'use strict';
// node-sqlite3-wasm's Database, reimplemented on top of sql.js.
//
// src/db/conn.js opens every .ddx file through `new Database(filePath)` and
// then adapts it (statement cache, transaction/readTx helpers). This module
// gives that code the same surface — prepare()/exec()/close() and statements
// with all/get/run/finalize/_reset — over sql.js, whose database lives in wasm
// memory instead of on disk. The bytes are read from and written back to
// shim/vfs.js, so a vault is still a file, just a virtual one.
//
// ── The one real semantic difference, and how it is handled ────────────────
// sql.js's export() closes and reopens the underlying database, which frees
// every live statement (verified, not assumed). conn.js keeps up to 256
// prepared statements cached and reuses them for the life of the connection,
// so a naive export would leave that cache full of dead handles. Statements
// here are therefore lazy: each wrapper holds its SQL and (re)prepares
// on first use after the generation counter moves, which export() bumps.
import vfs from './vfs.js';

let SQL = null;

export async function initSqlite(locateFile) {
  if (SQL) return SQL;
  const factory = globalThis.initSqlJs;
  if (typeof factory !== 'function') throw new Error('sql.js was not loaded (vendor/sql-wasm.js missing)');
  SQL = await factory({ locateFile });
  return SQL;
}

const normalizeParam = (v) => {
  if (v === undefined) return null;
  if (typeof v === 'boolean') return v ? 1 : 0;
  if (typeof v === 'bigint') return Number(v);
  if (v instanceof Date) return v.toISOString();
  return v;
};
const normalizeParams = (params) => {
  if (params == null) return [];
  const list = Array.isArray(params) ? params : [params];
  // conn.js's adapter always forwards a positional array; an object would be
  // named binding, which this codebase never uses.
  return list.map(normalizeParam);
};

const VACUUM_INTO_RE = /^\s*VACUUM\s+INTO\b/i;

const openDatabases = new Set();

class Statement {
  constructor(db, sql) {
    this.db = db;
    this.sql = sql;
    this.isFinalized = false;
    this._st = null;
    this._gen = -1;
  }
  _live() {
    if (this.isFinalized) throw new Error('statement is finalized');
    if (!this._st || this._gen !== this.db._gen) {
      this._st = this.db._raw.prepare(this.sql);
      this._gen = this.db._gen;
    }
    return this._st;
  }
  all(params) {
    const st = this._live();
    st.reset();
    st.bind(normalizeParams(params));
    const rows = [];
    while (st.step()) rows.push(st.getAsObject());
    st.reset();
    return rows;
  }
  get(params) {
    const st = this._live();
    st.reset();
    st.bind(normalizeParams(params));
    const row = st.step() ? st.getAsObject() : null;
    st.reset();
    return row;
  }
  run(params) {
    // VACUUM INTO is how the app makes a consistent copy of a vault — export,
    // duplicate, "export this Nexus". It asks sqlite to write a second
    // database file through its VFS, and sql.js's VFS is emscripten's
    // in-wasm-memory one, which this build does not (and should not) surface
    // as the app's filesystem. Serialising the database to the target path in
    // shim/vfs.js produces the same thing for every purpose the app has for
    // it: a complete, openable copy. The one property it does not carry over
    // is the "compacted" half of VACUUM — the copy is byte-for-byte the live
    // database rather than a repacked one.
    const target = VACUUM_INTO_RE.test(this.sql) ? normalizeParams(params)[0] : null;
    if (target) {
      vfs.write(String(target), this.db._raw.export());
      this.db._gen++; // export() freed every live statement
      return { changes: 0, lastInsertRowid: 0 };
    }
    const st = this._live();
    st.reset();
    st.bind(normalizeParams(params));
    st.step();
    st.reset();
    this.db._touch();
    return { changes: this.db._raw.getRowsModified(), lastInsertRowid: this.db._lastInsertRowid() };
  }
  _reset() {
    if (this._st && this._gen === this.db._gen) this._st.reset();
  }
  finalize() {
    if (this.isFinalized) return;
    this.isFinalized = true;
    if (this._st && this._gen === this.db._gen) { try { this._st.free(); } catch (_) {} }
    this._st = null;
    this.db._statements.delete(this);
  }
}

export class Database {
  constructor(filePath, options = {}) {
    if (!SQL) throw new Error('initSqlite() must finish before a Database is opened');
    this.filePath = String(filePath);
    const existing = vfs.read(this.filePath);
    this._raw = new SQL.Database(existing && existing.length ? existing : undefined);
    this._gen = 0;
    this._statements = new Set();
    this._dirty = false;
    this._persistTimer = null;
    this._rowidStmt = null;
    this.isOpen = true;
    openDatabases.add(this);
    if (!existing) vfs.write(this.filePath, this._raw.export());
    this._gen++; // that export freed nothing yet, but keep the counter honest
    if (options.readOnly) this.readOnly = true;
  }

  _lastInsertRowid() {
    if (!this._rowidStmt || this._rowidGen !== this._gen) {
      this._rowidStmt = this._raw.prepare('SELECT last_insert_rowid() AS id');
      this._rowidGen = this._gen;
    }
    this._rowidStmt.reset();
    this._rowidStmt.step();
    const { id } = this._rowidStmt.getAsObject();
    this._rowidStmt.reset();
    return id;
  }

  // Writes are coalesced the same way shim/vfs.js coalesces its IndexedDB
  // writes, and for the same reason: serialising a whole vault per statement
  // would make typing in the editor quadratic. The timer can never fire in the
  // middle of a transaction — conn.js's transaction() is strictly synchronous,
  // so nothing yields to the event loop between BEGIN and COMMIT.
  _touch() {
    this._dirty = true;
    if (this._persistTimer) return;
    this._persistTimer = setTimeout(() => { this._persistTimer = null; this.persist(); }, 250);
  }

  persist() {
    if (!this.isOpen || !this._dirty) return;
    this._dirty = false;
    const bytes = this._raw.export();
    // export() closed and reopened the database: every prepared statement it
    // held is gone, so bump the generation and let the wrappers re-prepare.
    this._gen++;
    vfs.write(this.filePath, bytes);
  }

  prepare(sql) {
    const st = new Statement(this, sql);
    this._statements.add(st);
    return st;
  }

  exec(sql) {
    this._raw.run(String(sql));
    const head = String(sql).trimStart().slice(0, 6).toUpperCase();
    // BEGIN/ROLLBACK change nothing on their own; COMMIT and everything else
    // (DDL, PRAGMA, plain statements) can.
    if (!head.startsWith('BEGIN') && !head.startsWith('ROLLBA')) this._touch();
  }

  run(sql, params) {
    if (params === undefined) { this.exec(sql); return { changes: this._raw.getRowsModified(), lastInsertRowid: this._lastInsertRowid() }; }
    const st = this.prepare(sql);
    try { return st.run(params); } finally { st.finalize(); }
  }
  all(sql, params) {
    const st = this.prepare(sql);
    try { return st.all(params); } finally { st.finalize(); }
  }
  get(sql, params) {
    const st = this.prepare(sql);
    try { return st.get(params); } finally { st.finalize(); }
  }

  close() {
    if (!this.isOpen) return;
    this.persist();
    for (const st of [...this._statements]) st.finalize();
    try { this._raw.close(); } catch (_) {}
    this.isOpen = false;
    openDatabases.delete(this);
  }
}

// Flush every open connection — used before the tab goes away, and by the
// bridge once an IPC call that wrote something has returned.
export function persistAll() {
  for (const db of openDatabases) { try { db.persist(); } catch (_) {} }
  return vfs.flushNow();
}

export default { Database, initSqlite, persistAll };
