'use strict';
// gzip for the DDX Transfer payload in `electron/src/db/transfer.js`, which is
// the only thing in the data layer that asks for zlib.
//
// Only the callback forms are provided, and that is the whole point: a browser's
// only gzip is CompressionStream, which is a stream. `zlib.gzipSync` cannot be
// shimmed here at any cost, so transfer.js reaches gzip through the callback
// form and never the sync one. If something new calls gzipSync, the build fails
// on the missing export rather than silently shipping a broken lane.
//
// CompressionStream is absent on older Safari. Rather than pretend, the callback
// gets an Error and transfer.js falls back to sending the payload uncompressed,
// recording `compression: 'none'` in the manifest so the receiver knows.

const supported = () =>
  typeof CompressionStream === 'function' && typeof DecompressionStream === 'function';

async function through(bytes, stream) {
  const buf = await new Response(
    new Blob([bytes]).stream().pipeThrough(stream),
  ).arrayBuffer();
  return new Uint8Array(buf);
}

// Node's signature is (buf, [opts], cb). The options argument is accepted and
// ignored — there is nothing here to tune — but it has to be tolerated, or a
// caller passing a level would hand us the options object as the callback.
const wrap = (make) => (bytes, opts, cb) => {
  const done = typeof opts === 'function' ? opts : cb;
  if (typeof done !== 'function') throw new TypeError('callback is required');
  if (!supported()) {
    done(new Error('gzip is not available in this browser'));
    return;
  }
  through(bytes, make()).then((out) => done(null, out), (err) => done(err));
};

export const gzip = wrap(() => new CompressionStream('gzip'));
export const gunzip = wrap(() => new DecompressionStream('gzip'));

export default { gzip, gunzip };
