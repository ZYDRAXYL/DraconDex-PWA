#!/usr/bin/env node
// Pull the DraconDex source this PWA is built from.
//
// DraconDex-APP is a separate (and private) repository, and none of its source
// is committed here — this repo holds the build tooling, the browser shims and
// the built site. So every build starts by fetching the app at a pinned commit
// into .app-src/ (gitignored).
//
//   node tools/fetch-app.mjs                 # the ref pinned in app-source.json
//   node tools/fetch-app.mjs --ref main      # a different ref, and pin it
//   node tools/fetch-app.mjs --local ../DraconDex-APP   # an existing checkout
//
// --local is what a working session uses when both repos are already on disk;
// it copies rather than clones, so an uncommitted change in the app checkout
// is what gets built.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, '.app-src');
const pinFile = path.join(root, 'app-source.json');
const pin = JSON.parse(fs.readFileSync(pinFile, 'utf8'));

const argv = process.argv.slice(2);
const argOf = (name) => { const i = argv.indexOf(name); return i === -1 ? null : argv[i + 1]; };
const ref = argOf('--ref') || pin.ref;
const local = argOf('--local');

// Only these paths are ever read by a build. Kept explicit so a fetch cannot
// quietly start dragging in parts of the app repo the PWA has no business
// shipping (tests, build scripts, the Electron packaging config).
export const NEEDED = [
  'electron/index.html',
  'electron/main.js',
  'electron/preload.js',
  'electron/database.js',
  'electron/css',
  'electron/src',
  'electron/vendor',
  'src/assets/brand',
  'src/schema',
  'flutter',
  'package.json',
];

// Build artefacts and platform folders a web build never reads. Copying a
// checkout that has already been built otherwise drags in ~200 MB of
// flutter/build and .dart_tool.
const SKIP = /(^|\/)(build|\.dart_tool|\.git|node_modules|android|ios|linux|macos|windows|test)(\/|$)/;

function copyInto(from) {
  fs.rmSync(target, { recursive: true, force: true });
  for (const rel of NEEDED) {
    const src = path.join(from, rel);
    if (!fs.existsSync(src)) continue;
    const dest = path.join(target, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.cpSync(src, dest, {
      recursive: true,
      filter: (srcPath) => !SKIP.test(path.relative(from, srcPath)),
    });
  }
  // electron/test is only excluded here because electron/src is copied whole.
  fs.rmSync(path.join(target, 'electron', 'test'), { recursive: true, force: true });
}

function head(dir) {
  try { return execFileSync('git', ['-C', dir, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(); }
  catch (_) { return null; }
}

let sourceCommit = null;
if (local) {
  const from = path.resolve(local);
  if (!fs.existsSync(path.join(from, 'electron', 'main.js'))) {
    console.error(`[fetch] ${from} does not look like an DraconDex-APP checkout`);
    process.exit(1);
  }
  copyInto(from);
  sourceCommit = head(from);
  console.log(`[fetch] copied from ${from}${sourceCommit ? ` @ ${sourceCommit.slice(0, 12)}` : ''}`);
} else {
  const clone = path.join(root, '.app-clone');
  fs.rmSync(clone, { recursive: true, force: true });
  console.log(`[fetch] cloning ${pin.repo} @ ${ref}`);
  execFileSync('git', ['clone', '--depth', '1', '--branch', ref, pin.repo, clone], { stdio: 'inherit' });
  copyInto(clone);
  sourceCommit = head(clone);
  fs.rmSync(clone, { recursive: true, force: true });
}

const version = JSON.parse(fs.readFileSync(path.join(target, 'package.json'), 'utf8')).version;
fs.writeFileSync(path.join(target, 'source.json'), JSON.stringify({ ref, commit: sourceCommit, version, fetchedAt: new Date().toISOString() }, null, 2) + '\n');
if (ref !== pin.ref || sourceCommit !== pin.commit) {
  fs.writeFileSync(pinFile, JSON.stringify({ ...pin, ref, commit: sourceCommit, version }, null, 2) + '\n');
}
console.log(`[fetch] DraconDex ${version} ready in .app-src/`);
