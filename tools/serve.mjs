#!/usr/bin/env node
// Static server for dist/, for local checks and for tools/verify.mjs.
// Mirrors GitHub Pages closely enough for what matters here: a project-page
// prefix (/DraconDex-PWA/), directory index.html, and correct wasm/js types.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
export const PREFIX = '/DraconDex-PWA';

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.webmanifest': 'application/manifest+json',
  '.wasm': 'application/wasm', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.ttf': 'font/ttf', '.otf': 'font/otf', '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.map': 'application/json; charset=utf-8', '.symbols': 'text/plain; charset=utf-8',
  '.bin': 'application/octet-stream', '.txt': 'text/plain; charset=utf-8',
};

export function createServer() {
  return http.createServer((req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath.startsWith(PREFIX)) urlPath = urlPath.slice(PREFIX.length) || '/';
    let filePath = path.join(dist, urlPath);
    if (!filePath.startsWith(dist)) { res.writeHead(403).end(); return; }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) filePath = path.join(filePath, 'index.html');
    if (!fs.existsSync(filePath)) { res.writeHead(404, { 'Content-Type': 'text/plain' }).end('not found: ' + urlPath); return; }
    res.writeHead(200, {
      'Content-Type': TYPES[path.extname(filePath)] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    fs.createReadStream(filePath).pipe(res);
  });
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const port = Number(process.argv[2]) || 8099;
  createServer().listen(port, () => console.log(`serving dist/ on http://localhost:${port}${PREFIX}/`));
}
