'use strict';
// src/db/update.js spawns the downloaded installer. The browser build never
// gets there (entry.js answers update:check with available:false), so this
// only has to resolve at bundle time — calling it is a bug, not a feature gap.
export function spawn() { throw new Error('child_process.spawn is not available in the browser build'); }
export default { spawn };
