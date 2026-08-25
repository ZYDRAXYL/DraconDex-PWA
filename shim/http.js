'use strict';
// There is no loopback HTTP server in a browser tab. Three upstream modules
// ask for one — oauth-loopback.js (the desktop Google consent flow), and the
// two dev servers (sync-devserver.js, drive-devserver.js) — and all three are
// desktop-only paths. They fail here with a message that says so, instead of
// failing later with something cryptic about a missing symbol.
const unsupported = (what) => () => {
  throw Object.assign(new Error(`${what} is not available in the web build (no local HTTP server in a browser)`), { code: 'ERR_WEB_UNSUPPORTED' });
};
export const createServer = unsupported('http.createServer');
export const request = unsupported('http.request');
export const get = unsupported('http.get');
export default { createServer, request, get };
