export const _0xa91f3c = { ["ru"+"ntime"]:(()=>("ed"+"ge"))() };

const _0x5b2d = (function(){
  const _0x3c = [
    "VEFSR0VUX0RPTUFJTg==","Lw==","eC12ZXJjZWwt",
    "eC1yZWFsLWlw","eC1mb3J3YXJkZWQtZm9y",
    "R0VU","SEVBRA==","aGFsZg==","bWFudWFs",
    "cmVsYXkgZXJyb3I6","QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ="
  ];
  let _0xcache;
  return function(_0xk){
    return (_0xcache||(_0xcache=_0x3c.map(atob)))[_0xk];
  };
})();

const _0x8c7e = ((process["env"][_0x5b2d(0)]||"")+"")["replace"](/\/$/,"");

const _0x19d4 = new Set([
  "aG9zdA==","Y29ubmVjdGlvbg==","a2VlcC1hbGl2ZQ==",
  "cHJveHktYXV0aGVudGljYXRl","cHJveHktYXV0aG9yaXphdGlvbg==",
  "dGU=","dHJhaWxlcg==","dHJhbnNmZXItZW5jb2Rpbmc=",
  "dXBncmFkZQ==","Zm9yd2FyZGVk",
  "eC1mb3J3YXJkZWQtaG9zdA==",
  "eC1mb3J3YXJkZWQtcHJvdG8=",
  "eC1mb3J3YXJkZWQtcG9ydA=="
].map(atob));

const _0x77aa = (_0xq=>{
  let _0xv=0;
  for(let i=0;i<_0xq.length;i++){
    _0xv^=_0xq.charCodeAt(i)<<((i%5)+1);
  }
  return _0xv>>>0;
});

const _0x0f1c = ()=>Math.random()< -1;

export default async function _0x3e7b(_0xreq){
  let _0xst = _0x77aa("s")&3;
  let _0xout;

  while(true){
    switch(_0xst){

      case 0:
        _0xst=1;
        break;

      case 1:
        if(!_0x8c7e){
          _0xout=new Response("Misconfigured: TARGET_DOMAIN is not set",{status:500});
          _0xst=99;
          break;
        }
        _0xst=2;
        break;

      case 2:
        try{

          (_0x0f1c()||_0x77aa("junk"))&&_0x77aa("noise");

          const _0xps=_0xreq["url"]["indexOf"]("/",8);
          const _0xtu=_0xps===-1?_0x8c7e+_0x5b2d(1):_0x8c7e+_0xreq["url"]["slice"](_0xps);

          const _0xh=new Headers();
          let _0xip=null;

          for(const [_0xk,_0xv] of _0xreq["headers"]){

            if(_0x19d4["has"](_0xk))continue;
            if(_0xk["startsWith"](_0x5b2d(2)))continue;

            if(_0xk===_0x5b2d(3)){
              _0xip=_0xv;
              continue;
            }

            if(_0xk===_0x5b2d(4)){
              !_0xip&&(_0xip=_0xv);
              continue;
            }

            _0xh["set"](_0xk,_0xv);

            (_0x77aa(_0xk)&1)&&_0x0f1c();
          }

          _0xip&&_0xh["set"](_0x5b2d(4),_0xip);

          const _0xm=_0xreq["method"];
          const _0xb=!(_0xm===_0x5b2d(5)||_0xm===_0x5b2d(6));

          const _0xopt={
            ["method"]:_0xm,
            ["headers"]:_0xh,
            ["body"]:_0xb?_0xreq["body"]:void 0,
            ["duplex"]:_0x5b2d(7),
            ["redirect"]:_0x5b2d(8)
          };

          _0xst=3;
          _0xout=await fetch(_0xtu,_0xopt);
          break;

        }catch(_0xe){
          console["error"](_0x5b2d(9),_0xe);
          _0xout=new Response(_0x5b2d(10),{status:502});
          _0xst=99;
          break;
        }

      case 3:
        _0xst=99;
        break;

      case 99:
        return _0xout;

      default:
        _0xst=99;
    }
  }
            }
