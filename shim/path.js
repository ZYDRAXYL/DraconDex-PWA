'use strict';
// POSIX-only path, which is all the browser build needs: every path inside the
// PWA is a synthetic one this build makes up (see shim/fs.js), never a real
// Windows or macOS path typed by a user.
const sep = '/';

function normalizeParts(parts, allowAboveRoot) {
  const out = [];
  for (const part of parts) {
    if (!part || part === '.') continue;
    if (part === '..') {
      if (out.length && out[out.length - 1] !== '..') out.pop();
      else if (allowAboveRoot) out.push('..');
    } else out.push(part);
  }
  return out;
}

function normalize(p) {
  if (!p) return '.';
  const abs = p.startsWith('/');
  const trailing = p.endsWith('/');
  let s = normalizeParts(p.split('/'), !abs).join('/');
  if (!s && !abs) s = '.';
  if (s && trailing) s += '/';
  return (abs ? '/' : '') + s;
}

function join(...parts) {
  const joined = parts.filter((p) => p !== undefined && p !== null && p !== '').join('/');
  return joined ? normalize(joined) : '.';
}

function resolve(...parts) {
  let resolved = '';
  let abs = false;
  for (let i = parts.length - 1; i >= 0 && !abs; i--) {
    const p = parts[i];
    if (!p) continue;
    resolved = resolved ? `${p}/${resolved}` : p;
    abs = p.startsWith('/');
  }
  const norm = normalizeParts(resolved.split('/'), !abs).join('/');
  if (abs) return '/' + norm;
  return norm || '.';
}

function dirname(p) {
  const norm = normalize(p).replace(/\/+$/, '');
  const i = norm.lastIndexOf('/');
  if (i === -1) return '.';
  if (i === 0) return '/';
  return norm.slice(0, i);
}

function basename(p, ext) {
  let b = normalize(p).replace(/\/+$/, '').split('/').pop() || '';
  if (ext && b.endsWith(ext) && b !== ext) b = b.slice(0, -ext.length);
  return b;
}

function extname(p) {
  const b = basename(p);
  const i = b.lastIndexOf('.');
  return i <= 0 ? '' : b.slice(i);
}

function relative(from, to) {
  const f = resolve(from).split('/').filter(Boolean);
  const t = resolve(to).split('/').filter(Boolean);
  let i = 0;
  while (i < f.length && i < t.length && f[i] === t[i]) i++;
  return [...f.slice(i).map(() => '..'), ...t.slice(i)].join('/');
}

const isAbsolute = (p) => !!p && p.startsWith('/');
const parse = (p) => ({ root: isAbsolute(p) ? '/' : '', dir: dirname(p), base: basename(p), ext: extname(p), name: basename(p, extname(p)) });

const posix = { sep, delimiter: ':', normalize, join, resolve, dirname, basename, extname, relative, isAbsolute, parse };
posix.posix = posix;
posix.win32 = posix;

export { sep, normalize, join, resolve, dirname, basename, extname, relative, isAbsolute, parse, posix };
export default posix;
