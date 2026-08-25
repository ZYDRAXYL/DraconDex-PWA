'use strict';
// Electron's main-process API, reduced to what electron/main.js touches on the
// way to registering its IPC handlers. Same idea as the run-dracondex
// web-driver harness upstream, which runs the real main.js against a stubbed
// Electron shell — the difference is that here the whole thing runs inside the
// browser rather than in a Node process behind a bridge.
//
// What deliberately ISN'T here: `protocol`. main.js guards its ddx-file://
// registration with `if (protocol)`, and the renderer already has an
// <img onerror> fallback that re-reads the image through importdock:readFiles,
// so leaving it undefined picks up a path the app already supports.

const handlers = new Map();
export const ipcHandlers = handlers;

const paths = {
  home: '/ddx/home',
  appData: '/ddx',
  userData: '/ddx/electron-user-data',
  temp: '/ddx/tmp',
  exe: '/ddx/DraconDex.exe',
  documents: '/ddx/home/Documents',
  downloads: '/ddx/home/Downloads',
  desktop: '/ddx/home/Desktop',
  logs: '/ddx/logs',
};

export const app = {
  // The packaged branch of main.js's data-dir choice is the only one that
  // works here: the dev branch resolves __dirname/../tmp-user-data, which is a
  // real checkout path that does not exist in a browser.
  isPackaged: true,
  getPath: (key) => paths[key] ?? '/ddx',
  setPath: (key, value) => { paths[key] = value; },
  getVersion: () => globalThis.__DDX_VERSION__ || '0.0.0',
  getName: () => 'DraconDex',
  getAppPath: () => '/ddx/app',
  commandLine: { appendSwitch: () => {} },
  requestSingleInstanceLock: () => true,
  // One tab is one instance; nothing here ever fires.
  on: () => app,
  once: () => app,
  // Never resolves on purpose: main.js opens its first BrowserWindow in here,
  // and in a browser the page IS the window.
  whenReady: () => new Promise(() => {}),
  quit: () => {},
  exit: () => {},
  relaunch: () => {},
  focus: () => {},
};

// A single fake window (id 1), which is what src/db/vault-context.js's
// windowNexus map is keyed by — see shim/entry.js, which seeds that map the
// way main.js's createWindow() would.
const fakeWindow = {
  id: 1,
  isDestroyed: () => false,
  isMinimized: () => false,
  isMaximized: () => false,
  minimize: () => {},
  maximize: () => {},
  unmaximize: () => {},
  restore: () => {},
  focus: () => {},
  close: () => {},
  on: () => {},
  webContents: { send: () => {}, id: 1, on: () => {}, session: { setPermissionRequestHandler: () => {} } },
  loadFile: () => {},
};

export class BrowserWindow {
  constructor() { return fakeWindow; }
  static getAllWindows() { return [fakeWindow]; }
  static getFocusedWindow() { return fakeWindow; }
  static fromWebContents() { return fakeWindow; }
  static fromId(id) { return id === 1 ? fakeWindow : null; }
}

export const ipcMain = {
  handle: (channel, fn) => { handlers.set(channel, fn); },
  handleOnce: (channel, fn) => { handlers.set(channel, fn); },
  removeHandler: (channel) => { handlers.delete(channel); },
  on: () => {},
};

// Replaced wholesale by shim/dialogs.js once the bridge is up — declared here
// so main.js can destructure `dialog` at load time.
export const dialog = {
  showSaveDialog: async (...args) => dialog._save(...args),
  showOpenDialog: async (...args) => dialog._open(...args),
  showMessageBox: async () => ({ response: 0 }),
  showErrorBox: (title, content) => console.error(`[dialog] ${title}: ${content}`),
  _save: async () => ({ canceled: true }),
  _open: async () => ({ canceled: true, filePaths: [] }),
};

export const Menu = {
  buildFromTemplate: () => ({}),
  setApplicationMenu: () => {},
};

export const shell = {
  openExternal: async (url) => { globalThis.open(url, '_blank', 'noopener'); },
  // No OS file manager to reveal anything in; the renderer treats a rejected
  // promise as "couldn't open" and toasts, which is the honest outcome.
  showItemInFolder: (p) => { console.warn('[shell] showItemInFolder is not available in the web build:', p); },
  openPath: async (p) => { console.warn('[shell] openPath is not available in the web build:', p); return 'unsupported'; },
  beep: () => {},
};

export const nativeTheme = { shouldUseDarkColors: true, on: () => {} };
export const session = { defaultSession: { setPermissionRequestHandler: () => {} } };
export const clipboard = {
  writeText: (t) => navigator.clipboard?.writeText(t),
  readText: () => '',
};

export const protocol = undefined;
export const contextBridge = { exposeInMainWorld: (key, value) => { globalThis[key] = value; } };
export const ipcRenderer = {
  invoke: (channel, ...args) => globalThis.__ddxInvoke(channel, args),
  on: () => {},
  send: () => {},
};

export default {
  app, BrowserWindow, ipcMain, dialog, Menu, shell, protocol, nativeTheme, session,
  clipboard, contextBridge, ipcRenderer, ipcHandlers: handlers,
};
