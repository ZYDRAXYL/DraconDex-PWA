// The lane router decides which front-end every visitor gets, and it is
// GENERATED into dist/index.html by tools/build-shell.mjs — so it has no module
// to import and would otherwise only ever be tested by hand on real hardware.
//
// This lifts detect() straight out of the generator's template string and runs
// it against real device signatures. Extracting the live source rather than
// copying it is the point: a copy would keep passing after the router changed.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const src = readFileSync(new URL('../tools/build-shell.mjs', import.meta.url), 'utf8');
const body = src.slice(src.indexOf('  function detect(){'), src.indexOf('  function go(lane){'));

/** Build detect() with the browser globals it reads passed in. */
function makeDetect(navigator, screen, coarse, hasFine) {
  const matchMedia = (q) => ({ matches: q.includes('any-pointer: fine') ? hasFine : coarse });
  // eslint-disable-next-line no-new-func
  return new Function('navigator', 'screen', 'matchMedia', `${body} return detect;`)(navigator, screen, matchMedia);
}

const CASES = [
  // name,             userAgent,                                                                     coarse, fine,  w,    h,    lane
  ['iPhone 15',        'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) Mobile/15E148',         true,  false, 393,  852,  'm'],
  ['Android phone',    'Mozilla/5.0 (Linux; Android 14; Pixel 8) Chrome/120 Mobile Safari/537.36',     true,  false, 412,  915,  'm'],
  ['iPad, iPadOS 17',  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Version/17.0 Safari/605.1.15', true,  false, 1024, 1366, 't'],
  ['iPad, legacy UA',  'Mozilla/5.0 (iPad; CPU OS 15_0 like Mac OS X) Mobile/15E148',                  true,  false, 810,  1080, 't'],
  ['Android tablet',   'Mozilla/5.0 (Linux; Android 13; SM-T870) Chrome/120 Safari/537.36',            true,  false, 800,  1280, 't'],
  ['iPad + keyboard',  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Version/17.0 Safari/605.1.15', true,  true,  1024, 1366, 't'],
  ['Windows desktop',  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36',           false, true,  1920, 1080, 'd'],
  ['macOS desktop',    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/120 Safari/537.36',     false, true,  1728, 1117, 'd'],
  ['Windows touch lap','Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120 Safari/537.36',           true,  true,  1920, 1080, 'd'],
  ['Linux touch kiosk','Mozilla/5.0 (X11; Linux x86_64) Chrome/120 Safari/537.36',                     true,  false, 1080, 1920, 't'],
];

test('every device signature routes to the lane built for it', () => {
  for (const [name, ua, coarse, fine, w, h, want] of CASES) {
    const detect = makeDetect({ userAgent: ua, maxTouchPoints: coarse ? 5 : 0 }, { width: w, height: h }, coarse, fine);
    assert.equal(detect(), want, `${name} (${w}x${h}, coarse=${coarse}, fine=${fine}) should route to /${want}/`);
  }
});

// iPadOS reports itself as desktop Safari. Before the tablet lane existed this
// was detected only to push it into 'm'; getting it wrong now sends every iPad
// to the desktop front-end, which is the single worst outcome of the three.
test('iPadOS is recognised despite claiming to be a Mac', () => {
  const ua = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Version/17.0 Safari/605.1.15';
  assert.equal(makeDetect({ userAgent: ua, maxTouchPoints: 5 }, { width: 1024, height: 1366 }, true, false)(), 't');
  // The same UA with no touch points is a real Mac.
  assert.equal(makeDetect({ userAgent: ua, maxTouchPoints: 0 }, { width: 1728, height: 1117 }, false, true)(), 'd');
});

// A phone must never reach the desktop lane: it runs the Electron renderer,
// which assumes a pointer and a window big enough for a split pane.
test('no phone signature ever reaches the desktop lane', () => {
  for (const [name, ua, coarse, fine, w, h] of CASES) {
    const lane = makeDetect({ userAgent: ua, maxTouchPoints: coarse ? 5 : 0 }, { width: w, height: h }, coarse, fine)();
    if (Math.min(w, h) < 600) assert.notEqual(lane, 'd', `${name} is phone-sized and must not get /d/`);
  }
});
