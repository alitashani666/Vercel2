const _0x3b7a8f = [
  "cnVudGltZQ==", "ZWRnZQ==", "VEFSR0VUX0RPTUFJTg==", "cmVwbGFjZQ==",
  "aG9zdA==", "Y29ubmVjdGlvbg==", "a2VlcC1hbGl2ZQ==", "cHJveHktYXV0aGVudGljYXRl",
  "cHJveHktYXV0aG9yaXphdGlvbg==", "dGU=", "dHJhaWxlcg==", "dHJhbnNmZXItZW5jb2Rpbmc=",
  "dXBncmFkZQ==", "Zm9yd2FyZGVk", "eC1mb3J3YXJkZWQtaG9zdA==", "eC1mb3J3YXJkZWQtcHJvdG8=",
  "eC1mb3J3YXJkZWQtcG9ydA==", "TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0", "aW5kZXhPZg==", "c2xpY2U=",
  "aGFz", "c3RhcnRzV2l0aA==", "eC12ZXJjZWwt", "eC1yZWFsLWlw",
  "eC1mb3J3YXJkZWQtZm9y", "c2V0", "bWV0aG9k", "R0VU",
  "SEVBRA==", "aGFsZg==", "bWFudWFs", "cmVsYXkgZXJyb3I6",
  "ZXJyb3I=", "QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ="
];

const _0x59a1f4 = _0x3b7a8f.map(x => atob(x));

export const config = {};
config[_0x59a1f4[0]] = _0x59a1f4[1];

const _0x1c8b73 = typeof process !== "undefined" && process.env ? process.env[_0x59a1f4[2]] || "" : "";
const _0x4d9a2f = _0x1c8b73[_0x59a1f4[3]](/\/$/, "");

const _0x8e2c4a = new Set([
  _0x59a1f4[4], _0x59a1f4[5], _0x59a1f4[6], _0x59a1f4[7], _0x59a1f4[8], _0x59a1f4[9],
  _0x59a1f4[10], _0x59a1f4[11], _0x59a1f4[12], _0x59a1f4[13], _0x59a1f4[14], _0x59a1f4[15], _0x59a1f4[16]
]);

const _0x67b93f = (function() {
  let _0x2a = 0x5; let _0x1b = 0x0;
  return function(_0x4c) {
    if (_0x4c === 0x0) return _0x1b;
    _0x2a += _0x4c;
    _0x1b = _0x2a * 0x2;
    return _0x2a;
  };
})();

export default async function _0x9f8a2c1d(_0x3d1b7a) {
  if (!_0x4d9a2f) {
    return new Response(_0x59a1f4[17], { status: 0x1f4 });
  }
  
  try {
    _0x67b93f(0x2);
    if (_0x67b93f(0x0) > 0x3e8) return null;

    const _0x7f4e8b = _0x3d1b7a.url[_0x59a1f4[18]]("/", 0x8);
    const _0x2a3d5e = _0x7f4e8b === -0x1 ? _0x4d9a2f + "/" : _0x4d9a2f + _0x3d1b7a.url[_0x59a1f4[19]](_0x7f4e8b);

    const _0x5e1b4c = new Headers();
    let _0x8c7d3f = null;

    for (const [_0x1a2b3c, _0x4d5e6f] of _0x3d1b7a.headers) {
      if (_0x8e2c4a[_0x59a1f4[20]](_0x1a2b3c)) continue;
      if (_0x1a2b3c[_0x59a1f4[21]](_0x59a1f4[22])) continue;
      if (_0x1a2b3c === _0x59a1f4[23]) {
        _0x8c7d3f = _0x4d5e6f;
        continue;
      }
      if (_0x1a2b3c === _0x59a1f4[24]) {
        if (!_0x8c7d3f) _0x8c7d3f = _0x4d5e6f;
        continue;
      }
      _0x5e1b4c[_0x59a1f4[25]](_0x1a2b3c, _0x4d5e6f);
    }

    if (_0x8c7d3f) _0x5e1b4c[_0x59a1f4[25]](_0x59a1f4[24], _0x8c7d3f);

    const _0x3f5c8b = _0x3d1b7a[_0x59a1f4[26]];
    const _0x7e2d9a = _0x3f5c8b !== _0x59a1f4[27] && _0x3f5c8b !== _0x59a1f4[28];

    const _0x1d4a5b = {
      method: _0x3f5c8b,
      headers: _0x5e1b4c,
      body: _0x7e2d9a ? _0x3d1b7a.body : undefined,
      duplex: _0x59a1f4[29],
      redirect: _0x59a1f4[30]
    };

    return await fetch(_0x2a3d5e, _0x1d4a5b);
  } catch (_0x5c8e2a) {
    console[_0x59a1f4[32]](_0x59a1f4[31], _0x5c8e2a);
    return new Response(_0x59a1f4[33], { status: 0x1f6 });
  }
}
