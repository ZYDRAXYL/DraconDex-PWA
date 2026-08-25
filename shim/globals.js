'use strict';
// Injected by esbuild (tools/build-desktop.mjs) wherever the bundled Node code
// references a global the browser has no notion of. Nothing here is a
// behavioural choice — it is the smallest set of values that make main.js and
// src/db/** take their packaged-desktop code paths.
import { Buffer as BufferShim } from './buffer.js';

const process = {
  // No DRACONDEX_DATA_DIR / PORTABLE_EXECUTABLE_DIR / DDX_PERF here on
  // purpose: their absence is what sends main.js down the packaged branch,
  // which is the one whose paths exist in the virtual filesystem.
  env: {},
  platform: 'linux',
  arch: 'wasm32',
  version: 'v0.0.0',
  versions: { node: '0.0.0' },
  argv: [],
  execPath: '/ddx/DraconDex.exe',
  cwd: () => '/ddx',
  on: () => process,
  once: () => process,
  emit: () => false,
  nextTick: (fn, ...args) => queueMicrotask(() => fn(...args)),
  exit: () => {},
  hrtime: Object.assign(() => [0, 0], { bigint: () => 0n }),
  memoryUsage: () => ({ heapUsed: 0, heapTotal: 0, rss: 0 }),
};

const __dirname = '/ddx/app';
const __filename = '/ddx/app/main.js';
const Buffer = BufferShim;

export { process, Buffer, __dirname, __filename };
