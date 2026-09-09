#!/usr/bin/env node
// One build of the whole site: fetch the app, build both lanes, write the shell.
//
//   npm run build                       # both lanes from the pinned commit
//   npm run build -- --local ../DraconDex-APP   # from a checkout beside this one
//   npm run build -- --skip-fetch       # reuse whatever is already in .app-src
//
// The mobile lane needs a Flutter SDK; without one it is skipped (loudly) and
// the rest of the site still builds.
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const argOf = (name) => { const i = argv.indexOf(name); return i === -1 ? null : argv[i + 1]; };
const step = (script, args = []) => execFileSync(process.execPath, [path.join(root, 'tools', script), ...args], { stdio: 'inherit' });

if (!argv.includes('--skip-fetch')) {
  const local = argOf('--local');
  step('fetch-app.mjs', local ? ['--local', local] : (argOf('--ref') ? ['--ref', argOf('--ref')] : []));
} else if (!fs.existsSync(path.join(root, '.app-src'))) {
  console.error('[build] --skip-fetch was given but .app-src does not exist');
  process.exit(1);
}

step('build-desktop.mjs');
step('build-mobile.mjs');
// Last: the service worker precaches a file list, so both lanes must exist
// before it is written.
step('build-shell.mjs');

const version = JSON.parse(fs.readFileSync(path.join(root, 'dist/version.json'), 'utf8'));
console.log(`\n[build] dist/ ready — DraconDex ${version.app} (${(version.appCommit || '').slice(0, 12)})`);
