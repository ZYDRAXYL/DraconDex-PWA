'use strict';
// Node's Buffer, only as far as the DraconDex data layer actually uses it:
// Buffer.alloc/from/concat/byteLength and .toString('base64'|'utf8'|'hex').
// A Uint8Array subclass, so anything that just wants bytes (sqlite BLOB
// binding, our VFS) takes one without noticing the difference.
const enc = new TextEncoder();
const dec = new TextDecoder();

function b64encode(bytes) {
  let s = '';
  for (let i = 0; i < bytes.length; i += 0x8000) {
    s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  }
  return btoa(s);
}
function b64decode(str) {
  const bin = atob(str);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

class Buffer extends Uint8Array {
  static alloc(size, fill = 0) {
    const b = new Buffer(size);
    if (fill) b.fill(fill);
    return b;
  }
  static allocUnsafe(size) { return new Buffer(size); }
  static from(value, encoding) {
    if (typeof value === 'string') {
      if (encoding === 'base64') return new Buffer(b64decode(value));
      if (encoding === 'hex') {
        const out = new Buffer(value.length >> 1);
        for (let i = 0; i < out.length; i++) out[i] = parseInt(value.substr(i * 2, 2), 16);
        return out;
      }
      return new Buffer(enc.encode(value));
    }
    if (value instanceof Uint8Array) return new Buffer(value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength));
    if (value instanceof ArrayBuffer) return new Buffer(value);
    if (Array.isArray(value)) return new Buffer(Uint8Array.from(value));
    return new Buffer(0);
  }
  static concat(list, total) {
    const len = total ?? list.reduce((n, b) => n + b.length, 0);
    const out = new Buffer(len);
    let off = 0;
    for (const b of list) { out.set(b.subarray(0, Math.min(b.length, len - off)), off); off += b.length; }
    return out;
  }
  static byteLength(value, encoding) {
    if (typeof value !== 'string') return value.length;
    if (encoding === 'base64') return b64decode(value).length;
    return enc.encode(value).length;
  }
  static isBuffer(v) { return v instanceof Buffer; }
  toString(encoding = 'utf8', start = 0, end = this.length) {
    const view = this.subarray(start, end);
    if (encoding === 'base64') return b64encode(view);
    if (encoding === 'hex') return [...view].map((b) => b.toString(16).padStart(2, '0')).join('');
    return dec.decode(view);
  }
  readUInt8(offset = 0) { return this[offset]; }
  readUInt16BE(offset = 0) { return (this[offset] << 8) | this[offset + 1]; }
  readUInt32BE(offset = 0) { return ((this[offset] << 24) >>> 0) + (this[offset + 1] << 16) + (this[offset + 2] << 8) + this[offset + 3]; }
  readUInt32LE(offset = 0) { return ((this[offset + 3] << 24) >>> 0) + (this[offset + 2] << 16) + (this[offset + 1] << 8) + this[offset]; }
  writeUInt32BE(value, offset = 0) {
    this[offset] = (value >>> 24) & 0xff; this[offset + 1] = (value >>> 16) & 0xff;
    this[offset + 2] = (value >>> 8) & 0xff; this[offset + 3] = value & 0xff;
    return offset + 4;
  }
  slice(start, end) { return Buffer.from(super.slice(start, end)); }
  equals(other) {
    if (this.length !== other.length) return false;
    for (let i = 0; i < this.length; i++) if (this[i] !== other[i]) return false;
    return true;
  }
}

if (typeof globalThis.Buffer === 'undefined') globalThis.Buffer = Buffer;
export { Buffer };
export default { Buffer };
