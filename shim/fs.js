'use strict';
// Node's fs, backed by shim/vfs.js. Only the calls src/db/** and main.js
// actually make are implemented — the full list was taken from the upstream
// tree, not guessed, and anything outside it throws loudly rather than
// silently doing nothing.
import { Buffer } from './buffer.js';
import { dirname, basename } from './path.js';
import vfs from './vfs.js';

const enc = new TextEncoder();
const dec = new TextDecoder();

class FsError extends Error {
  constructor(code, message) { super(message); this.code = code; }
}
const enoent = (p) => new FsError('ENOENT', `ENOENT: no such file or directory, '${p}'`);

export const existsSync = (p) => vfs.exists(p);

export function readFileSync(p, options) {
  const bytes = vfs.read(p);
  if (!bytes) throw enoent(p);
  const encoding = typeof options === 'string' ? options : options?.encoding;
  return encoding ? dec.decode(bytes) : Buffer.from(bytes);
}

export function writeFileSync(p, data) {
  vfs.write(p, typeof data === 'string' ? enc.encode(data) : new Uint8Array(data.buffer ? data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) : data));
}

export function mkdirSync(p) { vfs.mkdir(p); }

export function rmSync(p, opts = {}) {
  if (!vfs.exists(p)) {
    if (opts.force) return;
    throw enoent(p);
  }
  vfs.remove(p, !!opts.recursive);
}
export const unlinkSync = (p) => rmSync(p, {});
export const rmdirSync = (p, opts) => rmSync(p, { recursive: true, force: true, ...opts });

export function copyFileSync(src, dest) {
  const bytes = vfs.read(src);
  if (!bytes) throw enoent(src);
  vfs.write(dest, bytes.slice());
}

export function renameSync(src, dest) {
  if (vfs.isFile(src)) {
    const bytes = vfs.read(src);
    vfs.write(dest, bytes);
    vfs.remove(src, false);
    return;
  }
  if (vfs.isDir(src)) {
    const prefix = src.replace(/\/+$/, '') + '/';
    for (const f of [...vfs.files.keys()]) {
      if (f.startsWith(prefix)) vfs.write(dest.replace(/\/+$/, '') + '/' + f.slice(prefix.length), vfs.read(f));
    }
    vfs.remove(src, true);
    return;
  }
  throw enoent(src);
}

class Stats {
  constructor(path, size, isDir) { this._path = path; this.size = size; this._isDir = isDir; this.mtimeMs = Date.now(); this.mtime = new Date(this.mtimeMs); }
  isDirectory() { return this._isDir; }
  isFile() { return !this._isDir; }
}

export function statSync(p) {
  if (vfs.isFile(p)) return new Stats(p, vfs.read(p).length, false);
  if (vfs.isDir(p)) return new Stats(p, 0, true);
  throw enoent(p);
}
export const lstatSync = statSync;

// Free-space guard in split-migrate.js ("is there room to copy this vault?").
// navigator.storage.estimate() is async and this call site is synchronous, so
// the browser's real quota is sampled once at boot (see shim/entry.js) and
// answered from that.
export let __quota = { total: 2 * 1024 ** 3, used: 0 };
export function __setQuota(q) { __quota = q; }
export function statfsSync() {
  const free = Math.max(0, __quota.total - __quota.used);
  return { bsize: 4096, blocks: Math.floor(__quota.total / 4096), bfree: Math.floor(free / 4096), bavail: Math.floor(free / 4096) };
}

export function readdirSync(p, opts) {
  if (!vfs.isDir(p)) throw enoent(p);
  const names = vfs.list(p);
  if (!opts?.withFileTypes) return names;
  return names.map((name) => {
    const full = (p.replace(/\/+$/, '') || '') + '/' + name;
    const isDir = vfs.isDir(full);
    return { name, isDirectory: () => isDir, isFile: () => !isDir, parentPath: p, path: p };
  });
}

export function realpathSync(p) {
  if (!vfs.exists(p)) throw enoent(p);
  return String(p);
}
realpathSync.native = realpathSync;

// ── File descriptors ───────────────────────────────────────────────────────
// Only conn.js's forceLegacyJournalMode() uses these, to patch bytes 18-19 of a
// sqlite header. Harmless here (there is no real -wal sidecar in a virtual
// filesystem) but kept working rather than stubbed, so that guard behaves
// exactly as it does on the desktop build.
const fds = new Map();
let nextFd = 3;

export function openSync(p, flags = 'r') {
  if (!vfs.exists(p) && !/[wa+]/.test(flags)) throw enoent(p);
  if (!vfs.exists(p)) vfs.write(p, new Uint8Array(0));
  const fd = nextFd++;
  fds.set(fd, { path: String(p), pos: 0 });
  return fd;
}
export function readSync(fd, buffer, offset, length, position) {
  const entry = fds.get(fd);
  if (!entry) throw new FsError('EBADF', 'EBADF: bad file descriptor');
  const bytes = vfs.read(entry.path) || new Uint8Array(0);
  const start = position == null ? entry.pos : position;
  const slice = bytes.subarray(start, start + length);
  buffer.set(slice, offset);
  if (position == null) entry.pos += slice.length;
  return slice.length;
}
export function writeSync(fd, buffer, offset = 0, length = buffer.length, position = null) {
  const entry = fds.get(fd);
  if (!entry) throw new FsError('EBADF', 'EBADF: bad file descriptor');
  const current = vfs.read(entry.path) || new Uint8Array(0);
  const start = position == null ? entry.pos : position;
  const end = Math.max(current.length, start + length);
  const next = new Uint8Array(end);
  next.set(current, 0);
  next.set(buffer.subarray(offset, offset + length), start);
  vfs.write(entry.path, next);
  if (position == null) entry.pos += length;
  return length;
}
export const fsyncSync = () => {};
export function closeSync(fd) { fds.delete(fd); }

// ── Promises ───────────────────────────────────────────────────────────────
export const promises = {
  stat: async (p) => statSync(p),
  readFile: async (p, opts) => readFileSync(p, opts),
  writeFile: async (p, data) => writeFileSync(p, data),
  mkdir: async (p) => mkdirSync(p),
  rm: async (p, opts) => rmSync(p, opts),
  unlink: async (p) => rmSync(p, {}),
  copyFile: async (a, b) => copyFileSync(a, b),
  rename: async (a, b) => renameSync(a, b),
  readdir: async (p, opts) => readdirSync(p, opts),
  access: async (p) => { if (!vfs.exists(p)) throw enoent(p); },
};

export const constants = { F_OK: 0, R_OK: 4, W_OK: 2, X_OK: 1 };
export const createReadStream = () => { throw new FsError('ENOSYS', 'createReadStream is not available in the web build'); };
export const createWriteStream = createReadStream;

const fs = {
  existsSync, readFileSync, writeFileSync, mkdirSync, rmSync, unlinkSync, rmdirSync,
  copyFileSync, renameSync, statSync, lstatSync, statfsSync, readdirSync, realpathSync,
  openSync, readSync, writeSync, fsyncSync, closeSync, promises, constants,
  createReadStream, createWriteStream, __setQuota,
};
export default fs;
export { vfs, basename, dirname };
