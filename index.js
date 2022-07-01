// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).maybeBroadcastArray=r()}(this,(function(){"use strict";function t(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,f=i.__defineSetter__,u=i.__lookupGetter__,s=i.__lookupSetter__;var c=function(t,r,e){var n,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(t,r)||s.call(t,r)?(n=t.__proto__,t.__proto__=i,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),l="get"in e,h="set"in e,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(t,r,e.get),h&&f&&f.call(t,r,e.set),t},l=n,h=c,p=e()?l:h,y=p;var _=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},v=_;var d=function(t){return"boolean"==typeof t};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return g&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var O=function(t){return w.call(t)},A=Object.prototype.hasOwnProperty;var j=function(t,r){return null!=t&&A.call(t,r)},E="function"==typeof Symbol?Symbol.toStringTag:"",I=j,U=E,S=m;var N=O,T=function(t){var r,e,n;if(null==t)return S.call(t);e=t[U],r=I(t,U);try{t[U]=void 0}catch(r){return S.call(t)}return n=S.call(t),r?t[U]=e:delete t[U],n},x=b()?T:N,P=Boolean.prototype.toString;var B=x,R=function(t){try{return P.call(t),!0}catch(t){return!1}},L=b();var M=function(t){return"object"==typeof t&&(t instanceof Boolean||(L?R(t):"[object Boolean]"===B(t)))},C=d,F=M;var V=v,D=function(t){return C(t)||F(t)},G=M;V(D,"isPrimitive",d),V(D,"isObject",G);var Y=D;var J=function(){return new Function("return this;")()},k="object"==typeof self?self:null,W="object"==typeof window?window:null,X="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},z="object"==typeof X?X:null;module.exports=z;var $=Y.isPrimitive,H=J,q=k,K=W,Q=t(Object.freeze({__proto__:null}));var Z=function(t){if(arguments.length){if(!$(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return H()}if(q)return q;if(K)return K;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")},tt=Z,rt=tt();var et=function(){return"function"==typeof rt.BigInt&&"function"==typeof BigInt&&"bigint"==typeof rt.BigInt("1")&&"bigint"==typeof BigInt("1")},nt=p;var it=function(t,r,e){nt(t,r,{configurable:!1,enumerable:!1,get:e})},ot=it,at={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var ft=function(t){return at[t]||null};var ut=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0};var st=function(t){return Math.abs(t)};var ct=function(t){var r,e,n,i,o,a;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=st(t[0]),a=1;a<e;a++){if(o=st(t[a]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2};var lt=function(t,r){return r&&(2===t||3===t)};var ht=function(t,r){return r&&(1===t||3===t)};var pt=function(t,r,e){var n,i,o,a,f;for(n=t.length,i=e,o=e,f=0;f<n;f++){if(0===t[f])return[e,e];(a=r[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]};v(pt,"assign",(function(t,r,e,n){var i,o,a,f,u;for(i=t.length,o=e,a=e,u=0;u<i;u++){if(0===t[u])return n[0]=e,n[1]=e,n;(f=r[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var yt=pt;var _t=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=yt(r,e,n))[1]-o[0]+1};var vt=function(t){return{ROW_MAJOR_CONTIGUOUS:t.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY}};var dt=function(t){var r,e,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]};var gt=function(t,r){var e,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*e[f];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*e[f];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this};var bt=function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this};var mt=function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]};var wt=function(t){return t.re};var Ot=function(t){return t.im},At=wt,jt=Ot;var Et=function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(At(e),jt(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t};var It=function(t){return"string"==typeof t},Ut=String.prototype.valueOf;var St=x,Nt=function(t){try{return Ut.call(t),!0}catch(t){return!1}},Tt=b();var xt=function(t){return"object"==typeof t&&(t instanceof String||(Tt?Nt(t):"[object String]"===St(t)))},Pt=It,Bt=xt;var Rt=v,Lt=function(t){return Pt(t)||Bt(t)},Mt=xt;Rt(Lt,"isPrimitive",It),Rt(Lt,"isObject",Mt);var Ct=Lt,Ft=Ct.isPrimitive,Vt=/[-\/\\^$*+?.()|[\]{}]/g;var Dt=function(t){var r,e;if(!Ft(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(Vt,"\\$&"):(r=(r=t.substring(1,e)).replace(Vt,"\\$&"),t=t[0]+r+t.substring(e))},Gt=/./,Yt=tt(),Jt=Yt.document&&Yt.document.childNodes,kt=Int8Array,Wt=Gt,Xt=Jt,zt=kt;var $t=function(){return"function"==typeof Wt||"object"==typeof zt||"function"==typeof Xt};var Ht=function(){return/^\s*function\s*([^(]*)/i},qt=Ht;v(qt,"REGEXP",Ht());var Kt=qt,Qt=x;var Zt=Array.isArray?Array.isArray:function(t){return"[object Array]"===Qt(t)},tr=Zt;var rr=function(t){return null!==t&&"object"==typeof t};v(rr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!tr(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(rr));var er=rr,nr=er;var ir=x,or=Kt.REGEXP,ar=function(t){return nr(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var fr=function(t){var r,e,n;if(("Object"===(e=ir(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=or.exec(n.toString()))return r[1]}return ar(t)?"Buffer":e},ur=fr;var sr=fr;var cr=function(t){var r;return null===t?"null":"object"===(r=typeof t)?ur(t).toLowerCase():r},lr=function(t){return sr(t).toLowerCase()},hr=$t()?lr:cr,pr=hr;var yr=function(t){return"function"===pr(t)},_r=RegExp.prototype.exec;var vr=x,dr=function(t){try{return _r.call(t),!0}catch(t){return!1}},gr=b();var br=Dt,mr=yr,wr=Ct.isPrimitive,Or=function(t){return"object"==typeof t&&(t instanceof RegExp||(gr?dr(t):"[object RegExp]"===vr(t)))};var Ar=function(t,r,e){if(!wr(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(wr(r))r=br(r),r=new RegExp(r,"g");else if(!Or(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!wr(e)&&!mr(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return t.replace(r,e)},jr=wt,Er=Ot,Ir={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Ur=function(){var t,r,e,n,i,o,a;if(r=this._shape.length,n="ndarray( '"+(i=this._dtype)+"', ",t="",this._length<=100)if("complex64"===i||"complex128"===i)for(a=0;a<this._length;a++)o=this.iget(a),t+=jr(o)+", "+Er(o),a<this._length-1&&(t+=", ");else for(a=0;a<this._length;a++)t+=this.iget(a),a<this._length-1&&(t+=", ");else{if("complex64"===i||"complex128"===i)for(a=0;a<3;a++)o=this.iget(a),t+=jr(o)+", "+Er(o),a<2&&(t+=", ");else for(a=0;a<3;a++)t+=this.iget(a),a<2&&(t+=", ");if(t+=", ..., ","complex64"===i||"complex128"===i)for(a=2;a>=0;a--)o=this.iget(this._length-1-a),t+=jr(o)+", "+Er(o),a>0&&(t+=", ");else for(a=2;a>=0;a--)t+=this.iget(this._length-1-a),a>0&&(t+=", ")}if(e=Ir[this.dtype],n+=Ar(e,"{{data}}",t),n+=", ",n+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",n+=", ",n+="[ ",0===r)n+="0";else for(a=0;a<r;a++)this._strides[a]<0?n+=-this._strides[a]:n+=this._strides[a],a<r-1&&(n+=", ");return n+=" ]",n+=", ",n+="0",n+=", ",n+="'"+this._order+"'",n+=" )"},Sr=x,Nr="function"==typeof Uint8Array;var Tr="function"==typeof Uint8Array?Uint8Array:null,xr=function(t){return Nr&&t instanceof Uint8Array||"[object Uint8Array]"===Sr(t)},Pr=Tr;var Br=function(){var t,r;if("function"!=typeof Pr)return!1;try{r=new Pr(r=[1,3.14,-3.14,256,257]),t=xr(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Rr="function"==typeof Uint8Array?Uint8Array:void 0,Lr=function(){throw new Error("not implemented")},Mr=Br()?Rr:Lr,Cr=x,Fr="function"==typeof Uint16Array;var Vr="function"==typeof Uint16Array?Uint16Array:null,Dr=function(t){return Fr&&t instanceof Uint16Array||"[object Uint16Array]"===Cr(t)},Gr=Vr;var Yr=function(){var t,r;if("function"!=typeof Gr)return!1;try{r=new Gr(r=[1,3.14,-3.14,65536,65537]),t=Dr(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Jr,kr="function"==typeof Uint16Array?Uint16Array:void 0,Wr=function(){throw new Error("not implemented")},Xr={uint16:Yr()?kr:Wr,uint8:Mr};(Jr=new Xr.uint16(1))[0]=4660;var zr=52===new Xr.uint8(Jr.buffer)[0],$r=x,Hr="function"==typeof ArrayBuffer;var qr=function(t){return Hr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===$r(t)},Kr=x,Qr="function"==typeof Float64Array;var Zr="function"==typeof Float64Array?Float64Array:null,te=function(t){return Qr&&t instanceof Float64Array||"[object Float64Array]"===Kr(t)},re=Zr;var ee=function(){var t,r;if("function"!=typeof re)return!1;try{r=new re([1,3.14,-3.14,NaN]),t=te(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var ne,ie="function"==typeof Float64Array?Float64Array:void 0,oe=function(){throw new Error("not implemented")};ne=ee()?ie:oe;var ae="function"==typeof ArrayBuffer?ArrayBuffer:null,fe=qr,ue=ne,se=ae;var ce=function(){var t,r,e;if("function"!=typeof se)return!1;try{e=new se(16),(t=fe(e)&&"function"==typeof se.isView)&&((r=new ue(e))[0]=-3.14,r[1]=NaN,t=t&&se.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t};var le="function"==typeof ArrayBuffer?ArrayBuffer:void 0,he=function(){throw new Error("not implemented")},pe=ce()?le:he,ye=x,_e="function"==typeof DataView;var ve="function"==typeof DataView?DataView:null,de=function(t){return _e&&t instanceof DataView||"[object DataView]"===ye(t)},ge=pe,be=ve;var me=function(){var t,r,e;if("function"!=typeof be)return!1;try{e=new ge(24),r=new be(e,8),(t=de(r)&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t};var we="function"==typeof DataView?DataView:void 0,Oe=function(){throw new Error("not implemented")},Ae=me()?we:Oe,je="function"==typeof BigInt?BigInt:void 0,Ee=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Ie=function(){return Ee.slice()};var Ue=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},Se=p;var Ne=function(t,r,e){Se(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},Te=Ne;var xe=function(t){return Object.keys(Object(t))},Pe=xe;var Be=function(){return function(){return 2!==(Pe(arguments)||"").length}(1,2)},Re=void 0!==Object.keys,Le=x;var Me,Ce=function(t){return"[object Arguments]"===Le(t)},Fe=Ce;Me=function(){return Fe(arguments)}();var Ve=Me;var De=function(t){return"number"==typeof t},Ge=Number,Ye=Ge.prototype.toString;var Je=x,ke=Ge,We=function(t){try{return Ye.call(t),!0}catch(t){return!1}},Xe=b();var ze=function(t){return"object"==typeof t&&(t instanceof ke||(Xe?We(t):"[object Number]"===Je(t)))},$e=De,He=ze;var qe=v,Ke=function(t){return $e(t)||He(t)},Qe=ze;qe(Ke,"isPrimitive",De),qe(Ke,"isObject",Qe);var Ze=Ke;var tn=function(t){return t!=t},rn=Ze.isPrimitive,en=tn;var nn=function(t){return rn(t)&&en(t)},on=Ze.isObject,an=tn;var fn=function(t){return on(t)&&an(t.valueOf())},un=nn,sn=fn;var cn=v,ln=function(t){return un(t)||sn(t)},hn=fn;cn(ln,"isPrimitive",nn),cn(ln,"isObject",hn);var pn=ln,yn=Number.POSITIVE_INFINITY,_n=Ge.NEGATIVE_INFINITY,vn=Math.floor,dn=vn;var gn=function(t){return dn(t)===t},bn=yn,mn=_n,wn=gn;var On=function(t){return t<bn&&t>mn&&wn(t)},An=Ze.isPrimitive,jn=On;var En=function(t){return An(t)&&jn(t)},In=Ze.isObject,Un=On;var Sn=function(t){return In(t)&&Un(t.valueOf())},Nn=En,Tn=Sn;var xn=v,Pn=function(t){return Nn(t)||Tn(t)},Bn=Sn;xn(Pn,"isPrimitive",En),xn(Pn,"isObject",Bn);var Rn,Ln=Pn,Mn=Object.prototype.propertyIsEnumerable;Rn=!Mn.call("beep","0");var Cn=Ct,Fn=pn.isPrimitive,Vn=Ln.isPrimitive,Dn=Mn,Gn=Rn;var Yn=function(t,r){var e;return null!=t&&(!(e=Dn.call(t,r))&&Gn&&Cn(t)?!Fn(r=+r)&&Vn(r)&&r>=0&&r<t.length:e)},Jn=Yn,kn=j,Wn=Jn,Xn=Zt,zn=gn;var $n=Ve?Ce:function(t){return null!==t&&"object"==typeof t&&!Xn(t)&&"number"==typeof t.length&&zn(t.length)&&t.length>=0&&t.length<=4294967295&&kn(t,"callee")&&!Wn(t,"callee")},Hn=$n,qn=xe,Kn=Array.prototype.slice;var Qn=function(t){return Hn(t)?qn(Kn.call(t)):qn(t)};var Zn=Jn((function(){}),"prototype"),ti=!Jn({toString:null},"toString"),ri=gn;var ei=pn,ni=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ri(t.length)&&t.length>=0&&t.length<=9007199254740991},ii=Ct.isPrimitive,oi=Ln.isPrimitive;var ai=function(t,r,e){var n,i;if(!ni(t)&&!ii(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!oi(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(ei(r)){for(;i<n;i++)if(ei(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1};var fi,ui=function(t){return t.constructor&&t.constructor.prototype===t},si="undefined"==typeof window?void 0:window,ci=j,li=ai,hi=hr,pi=ui,yi=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_i=si;fi=function(){var t;if("undefined"===hi(_i))return!1;for(t in _i)try{-1===li(yi,t)&&ci(_i,t)&&null!==_i[t]&&"object"===hi(_i[t])&&pi(_i[t])}catch(t){return!0}return!1}();var vi="undefined"!=typeof window,di=fi,gi=ui,bi=vi;var mi=er,wi=j,Oi=$n,Ai=Zn,ji=ti,Ei=function(t){if(!1===bi&&!di)return gi(t);try{return gi(t)}catch(t){return!1}},Ii=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Ui,Si=xe,Ni=Qn,Ti=function(t){var r,e,n,i,o,a,f;if(i=[],Oi(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!wi(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1===(n="function"==typeof t)&&!mi(t))return i;e=Ai&&n}for(o in t)e&&"prototype"===o||!wi(t,o)||i.push(String(o));if(ji)for(r=Ei(t),f=0;f<Ii.length;f++)a=Ii[f],r&&"constructor"===a||!wi(t,a)||i.push(String(a));return i};Ui=Re?Be()?Ni:Si:Ti;var xi=Te,Pi=Ui;var Bi=function(t,r){var e,n,i;for(e=Pi(r),i=0;i<e.length;i++)n=e[i],xi(t,n,r[n]);return t},Ri=Ie,Li=Ue,Mi=Bi;v(Ri,"enum",Li),Mi(Ri,Li());var Ci=Ri,Fi=["row-major","column-major"];var Vi=function(){return Fi.slice()};v(Vi,"enum",(function(){return{"row-major":1,"column-major":2}}));var Di=Vi,Gi=["throw","clamp","wrap"];var Yi=function(){return Gi.slice()};v(Yi,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Ji=Yi,ki=zr,Wi=pe,Xi=Ae,zi=je,$i=Di.enum,Hi=Ji.enum,qi=(0,Ci.enum)(),Ki=$i(),Qi=Hi();var Zi=function(){var t,r,e,n,i,o,a,f,u,s,c,l,h,p;if(u=this._mode||"throw",a=this._submode||[u],e=33+16*(l=this._ndims)+(h=a.length),(f=this.__meta_dataview__)&&f.byteLength===e)return f;for(f=new Xi(new Wi(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,ki?1:0),s+=1,f.setInt16(s,qi[n],ki),s+=2,f.setBigInt64(s,zi(l),ki),c=8*l,s+=8,p=0;p<l;p++)f.setBigInt64(s,zi(i[p]),ki),f.setBigInt64(s+c,zi(o[p]*t),ki),s+=8;for(s+=c,f.setBigInt64(s,zi(this._offset*t),ki),s+=8,f.setInt8(s,Ki[this._order]),s+=1,f.setInt8(s,Qi[u]),s+=1,f.setBigInt64(s,zi(h),ki),s+=8,p=0;p<h;p++)f.setInt8(s,Qi[a[p]]),s+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(s,r,ki),this.__meta_dataview__=f,f},to=zr,ro=Mr,eo=Ae,no=vn;var io=function(t){var r,e,n,i;return r=new ro(8),0===t||(i=(4294967295&t)>>>0,n=no(t/4294967296),e=new eo(r.buffer),to?(e.setUint32(0,i,to),e.setUint32(4,n,to)):(e.setUint32(0,n,to),e.setUint32(4,i,to))),r},oo=zr,ao=Ae,fo=vn,uo=new Mr(8),so=new ao(uo.buffer);var co=io;v(co,"assign",(function(t,r,e,n){var i,o,a;if(0===t){for(a=0;a<uo.length;a++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=fo(t/4294967296),oo?(so.setUint32(0,o,oo),so.setUint32(4,i,oo)):(so.setUint32(0,i,oo),so.setUint32(4,o,oo)),a=0;a<uo.length;a++)r[n]=uo[a],n+=e;return r}));var lo=zr,ho=pe,po=Ae,yo=Mr,_o=Di.enum,vo=Ji.enum,go=co.assign,bo=(0,Ci.enum)(),mo=_o(),wo=vo();var Oo=et,Ao=v,jo=ot,Eo=ft,Io=ut,Uo=ct,So=lt,No=ht,To=_t,xo=vt,Po=dt,Bo=gt,Ro=bt,Lo=mt,Mo=Et,Co=Ur,Fo=Zi,Vo=function(){var t,r,e,n,i,o,a,f,u,s,c,l,h,p,y;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(h=this._ndims)+(p=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new po(new ho(n)),r=new yo(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,lo?1:0),c+=1,u.setInt16(c,bo[i],lo),go(h,r,1,c+=2),l=8*h,c+=8,y=0;y<h;y++)go(o[y],r,1,c),go(a[y]*t,r,1,c+l),c+=8;for(c+=l,go(this._offset*t,r,1,c),c+=8,u.setInt8(c,mo[this._order]),c+=1,u.setInt8(c,wo[s]),go(p,r,1,c+=1),c+=8,y=0;y<p;y++)u.setInt8(c,wo[f[y]]),c+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(c,e,lo),this.__meta_dataview__=u,u};function Do(t,r,e,n,i,o){var a,f,u,s,c;if(!(this instanceof Do))return new Do(t,r,e,n,i,o);for(s=1,c=0;c<e.length;c++)s*=e[c];return f=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=Eo(t),this._buffer=r,this._dtype=t,this._length=s,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=Boolean(r.get&&r.set),this._iterationOrder=Io(n),a=To(s,e,n,i,this._iterationOrder),u=Uo(n),this._flags={ROW_MAJOR_CONTIGUOUS:No(u,a),COLUMN_MAJOR_CONTIGUOUS:So(u,a),READONLY:!1},this.__meta_dataview__=null,this}Ao(Do,"name","ndarray"),jo(Do.prototype,"byteLength",(function(){return this._byteLength})),jo(Do.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),jo(Do.prototype,"data",(function(){return this._buffer})),jo(Do.prototype,"dtype",(function(){return this._dtype})),jo(Do.prototype,"flags",(function(){return xo(this._flags)})),jo(Do.prototype,"length",(function(){return this._length})),jo(Do.prototype,"ndims",(function(){return this._ndims})),jo(Do.prototype,"offset",(function(){return this._offset})),jo(Do.prototype,"order",(function(){return this._order})),jo(Do.prototype,"shape",(function(){return this._shape.slice()})),jo(Do.prototype,"strides",(function(){return this._strides.slice()})),Ao(Do.prototype,"get",Lo),Ao(Do.prototype,"iget",Po),Ao(Do.prototype,"set",Ro),Ao(Do.prototype,"iset",Bo),Ao(Do.prototype,"toString",Co),Ao(Do.prototype,"toJSON",Mo),Ao(Do.prototype,"__array_meta_dataview__",Oo()?Fo:Vo);var Go=Do,Yo=function(t){var r,e;for(r=[],e=0;e<t.length;e++)r.push(t[e]);return r};var Jo=function(t,r){var e,n,i,o,a,f,u,s,c;if((a=r.length)<(f=(i=t.shape).length))throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(e=[],s=0;s<a;s++)e.push(0);for(o=t.strides,s=a-1;s>=0;s--)if(!((c=f-a+s)<0)){if(u=i[c],0!==(n=r[s])&&n<u)throw new Error("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: ("+Yo(i).join(", ")+"). Desired shape: ("+Yo(r).join(", ")+"). Dimension: "+s+".");if(u===n)e[s]=o[c];else{if(1!==u)throw new Error("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: ("+Yo(i).join(", ")+"). Desired shape: ("+Yo(r).join(", ")+"). Dimension: "+s+".");e[s]=0}}return Go(t.dtype,t.data,Yo(r),e,t.offset,t.order)};return function(t,r){var e,n,i;if(n=r.length,(e=t.shape).length===n){for(i=0;i<n;i++)if(e[i]!==r[i])return Jo(t,r);return t}return Jo(t,r)}}));
//# sourceMappingURL=index.js.map
