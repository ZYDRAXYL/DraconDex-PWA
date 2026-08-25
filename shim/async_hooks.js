'use strict';
// AsyncLocalStorage, as much of it as a browser can honestly provide.
//
// src/db/vault-context.js uses ALS so that two Electron windows on two vaults
// can't have one handler's await resume with the other window's vault (its own
// comment explains why a module-scoped variable is wrong there). A browser tab
// is the case that concern doesn't arise in: one page, one ?nexus=, so every
// h() call in this build establishes the *same* vault id.
//
// The store is therefore kept across the awaits of the function passed to
// run() (a plain try/finally would drop it at the first await, which would
// break vault resolution outright) and restored when that call settles. What
// this cannot reproduce is two overlapping run() calls with *different* vault
// ids — the only ones in the codebase are the deliberate cross-vault
// operations (export/duplicate a different Nexus), and the browser build's
// file dialogs resolve without waiting on a picker, so those no longer park
// mid-call the way the desktop ones do.
export class AsyncLocalStorage {
  constructor() { this._store = undefined; }
  run(store, fn) {
    const prev = this._store;
    this._store = store;
    let result;
    try {
      result = fn();
    } catch (err) {
      this._store = prev;
      throw err;
    }
    if (result && typeof result.then === 'function') {
      return result.then(
        (v) => { this._store = prev; return v; },
        (e) => { this._store = prev; throw e; },
      );
    }
    this._store = prev;
    return result;
  }
  getStore() { return this._store; }
  enterWith(store) { this._store = store; }
  exit(fn) { const prev = this._store; this._store = undefined; try { return fn(); } finally { this._store = prev; } }
}
export class AsyncResource { constructor() {} runInAsyncScope(fn, thisArg, ...args) { return fn.apply(thisArg, args); } }
export const executionAsyncId = () => 0;
export default { AsyncLocalStorage, AsyncResource, executionAsyncId };
