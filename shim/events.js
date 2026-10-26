'use strict';
// src/db/update.js awaits a write stream's 'drain' with events.once(). Same
// unreachable install path as shim/child_process.js; this is the real
// semantics anyway, for any emitter with once().
export function once(emitter, name) {
  return new Promise((resolve) => emitter.once(name, (...a) => resolve(a)));
}
export default { once };
