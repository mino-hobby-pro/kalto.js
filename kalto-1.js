(function(){var _0x=function(s){return atob(s)};
var _p=['HqFqjOAlxdV8+emYyglI9eus1raPHBc3bF8xtkqsouU=','YDq11pgd0d1D0ryeEN3/tVZi+wB9J1odeqnKA3fBnnE=','gIc40wAYQHEJSeXbiTxLzxZiDPHu+w3g2qxJdnuyxfk=','EdMjh4Y+eYcGr7QAwh/GyQwxz3Z2J73AiqyDxhsmobo=','2HOSJ8BkxG8l3zzf5DVNSibv2/7cwA/PTRHGDRYZawk=','RP9rg7KTm/ZfiHM5M9IAQZUDFX7c61gWPtPALWlrXUQ='];
function _r(a){var z=new Uint8Array(32);for(var i=0;i<a.length;i++){var x=Uint8Array.from(_0x(a[i]),function(c){return c.charCodeAt(0)});for(var j=0;j<32;j++)z[j]^=x[j]}return z}
var _S1=_r(_p);
var _N='__'+(0xDEAD).toString(36)+'_K1';
Object.defineProperty(window,_N,{value:_S1,writable:false,configurable:false,enumerable:false});
// 復号化の触媒として、自身のソースのハッシュを計算
var _f=arguments.callee.toString();
var _h=0;for(var i=0;i<_f.length;i++){_h=((_h<<5)-_h+_f.charCodeAt(i))|0}
window['__k1_catalyst']=(_h>>>0).toString(16);
// kalto-2 のロード合図
var _e=new CustomEvent('__k1_ready',{detail:{ts:Date.now()}});
try{window.dispatchEvent(_e)}catch(e){}
// stage1 完了マーカー
window.__kalto_stage=1;
})();