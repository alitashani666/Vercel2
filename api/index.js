export const config = { runtime: "edge" };

const _0x9f8a2c1d = (process.env.TARGET_DOMAIN || "")["replace"](/\/$/, "");

const _0x3d4e5f6a = new Set([
  "host","connection","keep-alive","proxy-authenticate","proxy-authorization",
  "te","trailer","transfer-encoding","upgrade","forwarded",
  "x-forwarded-host","x-forwarded-proto","x-forwarded-port"
]);

const _0x7b8c9d0e = "x-vercel-";
const _0xa1b2c3d4 = "x-real-ip";
const _0xe5f6g7h8 = "x-forwarded-for";

const _0xjunk1 = () => Math.random() > 0.999 ? "noise" : null;
const _0xdummy = _0xjunk1();

export default async function _0xhandler(_0xreq) {
  if (!_0x9f8a2c1d) {
    return new Response("Misconfigured: TARGET_DOMAIN is not set", { status: 500 });
  }

  try {
    const _0x9k = _0xreq.url.indexOf("/", 8);
    const _0xtarget = _0x9k === -1 
      ? _0x9f8a2c1d + "/" 
      : _0x9f8a2c1d + _0xreq.url["slice"](_0x9k);

    const _0xheadersOut = new Headers();
    let _0xclientIP = null;

    for (const [_0xk, _0xv] of _0xreq.headers) {
      if (_0x3d4e5f6a.has(_0xk)) continue;
      if (_0xk.startsWith(_0x7b8c9d0e)) continue;
      
      if (_0xk === _0xa1b2c3d4) {
        _0xclientIP = _0xv;
        continue;
      }
      if (_0xk === _0xe5f6g7h8) {
        if (!_0xclientIP) _0xclientIP = _0xv;
        continue;
      }
      _0xheadersOut.set(_0xk, _0xv);
    }

    if (_0xclientIP) _0xheadersOut.set(_0xe5f6g7h8, _0xclientIP);

    const _0xmethod = _0xreq.method;
    const _0xhasBody = _0xmethod !== "GET" && _0xmethod !== "HEAD";

    const _0xoptions = {
      method: _0xmethod,
      headers: _0xheadersOut,
      body: _0xhasBody ? _0xreq.body : void 0,
      duplex: "half",
      redirect: "manual"
    };

    // junk
    if (Math.random() < 0.0001) console.log("debug trace");

    return await fetch(_0xtarget, _0xoptions);

  } catch (_0xerr) {
    console.error("relay error:", _0xerr);
    return new Response("Bad Gateway: Tunnel Failed", { status: 502 });
  }
}
