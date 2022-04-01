// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){if(t.__esModule)return t;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=function(){try{return r({},"x",{}),!0}catch(t){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,f=i.__defineSetter__,u=i.__lookupGetter__,s=i.__lookupSetter__;var c=function(t,r,e){var n,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(t,r)||s.call(t,r)?(n=t.__proto__,t.__proto__=i,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),l="get"in e,h="set"in e,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(t,r,e.get),h&&f&&f.call(t,r,e.set),t},l=n,h=c,p=e()?l:h,y=p;var _=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},v=_;var g=function(t){return"boolean"==typeof t};var d=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return d&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,w=m;var O=function(t){return w.call(t)},A=Object.prototype.hasOwnProperty;var j=function(t,r){return null!=t&&A.call(t,r)},E="function"==typeof Symbol?Symbol.toStringTag:"",I=j,U=E,S=m;var N=O,P=function(t){var r,e,n;if(null==t)return S.call(t);e=t[U],r=I(t,U);try{t[U]=void 0}catch(r){return S.call(t)}return n=S.call(t),r?t[U]=e:delete t[U],n},T=b()?P:N,x=Boolean.prototype.toString;var B=T,R=function(t){try{return x.call(t),!0}catch(t){return!1}},L=b();var M=function(t){return"object"==typeof t&&(t instanceof Boolean||(L?R(t):"[object Boolean]"===B(t)))},C=g,F=M;var V=v,D=function(t){return C(t)||F(t)},G=M;V(D,"isPrimitive",g),V(D,"isObject",G);var Y="object"==typeof self?self:null,J="object"==typeof window?window:null,k=D.isPrimitive,W=function(){return new Function("return this;")()},X=Y,z=J,$=t(Object.freeze({__proto__:null}));var H=function(t){if(arguments.length){if(!k(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return W()}if(X)return X;if(z)return z;if($)return $;throw new Error("unexpected error. Unable to resolve global object.")},q=H,K=q();var Q=function(){return"function"==typeof K.BigInt&&"function"==typeof BigInt&&"bigint"==typeof K.BigInt("1")&&"bigint"==typeof BigInt("1")},Z=p;var tt=function(t,r,e){Z(t,r,{configurable:!1,enumerable:!1,get:e})},rt=tt,et={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};var nt=function(t){return et[t]||null};var it=function(t){var r,e;for(r=0,e=0;e<t.length;e++)t[e]<0&&(r+=1);return 0===r?1:r===t.length?-1:0};var ot=function(t){return Math.abs(t)};var at=function(t){var r,e,n,i,o,a;if(0===(e=t.length))return 0;for(r=!0,n=!0,i=ot(t[0]),a=1;a<e;a++){if(o=ot(t[a]),r&&o<i?r=!1:n&&o>i&&(n=!1),!n&&!r)return 0;i=o}return n&&r?3:n?1:2};var ft=function(t,r){return r&&(2===t||3===t)};var ut=function(t,r){return r&&(1===t||3===t)};var st=function(t,r,e){var n,i,o,a,f;for(n=t.length,i=e,o=e,f=0;f<n;f++){if(0===t[f])return[e,e];(a=r[f])>0?o+=a*(t[f]-1):a<0&&(i+=a*(t[f]-1))}return[i,o]};v(st,"assign",(function(t,r,e,n){var i,o,a,f,u;for(i=t.length,o=e,a=e,u=0;u<i;u++){if(0===t[u])return n[0]=e,n[1]=e,n;(f=r[u])>0?a+=f*(t[u]-1):f<0&&(o+=f*(t[u]-1))}return n[0]=o,n[1]=a,n}));var ct=st;var lt=function(t,r,e,n,i){var o;return 0!==t&&0!==i&&t===(o=ct(r,e,n))[1]-o[0]+1};var ht=function(t){return{ROW_MAJOR_CONTIGUOUS:t.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY}};var pt=function(t){var r,e,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(e=this._shape,r=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%e[a],t/=e[a],i+=o*r[a];return this._accessors?this._buffer.get(i):this._buffer[i]};var yt=function(t,r){var e,n,i,o,a,f;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset+t):this._buffer[this._offset+t]=r,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(r,this._offset-t):this._buffer[this._offset-t]=r,this}if(n=this._shape,e=this._strides,o=this._offset,"column-major"===this._order){for(f=0;f<i;f++)t-=a=t%n[f],t/=n[f],o+=a*e[f];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this}for(f=i-1;f>=0;f--)t-=a=t%n[f],t/=n[f],o+=a*e[f];return this._accessors?this._buffer.set(r,o):this._buffer[o]=r,this};var _t=function(){var t,r;for(t=this._offset,r=0;r<arguments.length-1;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.set(arguments[r],t):this._buffer[t]=arguments[r],this};var vt=function(){var t,r;for(t=this._offset,r=0;r<arguments.length;r++)t+=this._strides[r]*arguments[r];return this._accessors?this._buffer.get(t):this._buffer[t]};var gt=function(t){return t.re};var dt=function(t){return t.im},bt=gt,mt=dt;var wt=function(){var t,r,e,n;for(r=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<r;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<r;n++)e=this.iget(n),t.data.push(bt(e),mt(e));else for(n=0;n<r;n++)t.data.push(this.iget(n));return t};var Ot=function(t){return"string"==typeof t},At=String.prototype.valueOf;var jt=T,Et=function(t){try{return At.call(t),!0}catch(t){return!1}},It=b();var Ut=function(t){return"object"==typeof t&&(t instanceof String||(It?Et(t):"[object String]"===jt(t)))},St=Ot,Nt=Ut;var Pt=v,Tt=function(t){return St(t)||Nt(t)},xt=Ut;Pt(Tt,"isPrimitive",Ot),Pt(Tt,"isObject",xt);var Bt=Tt,Rt=Bt.isPrimitive,Lt=/[-\/\\^$*+?.()|[\]{}]/g;var Mt=function(t){var r,e;if(!Rt(t))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+t+"`.");if("/"===t[0])for(e=t.length-1;e>=0&&"/"!==t[e];e--);return void 0===e||e<=0?t.replace(Lt,"\\$&"):(r=(r=t.substring(1,e)).replace(Lt,"\\$&"),t=t[0]+r+t.substring(e))},Ct=/./,Ft=q(),Vt=Ft.document&&Ft.document.childNodes,Dt=Int8Array,Gt=Ct,Yt=Vt,Jt=Dt;var kt=function(){return"function"==typeof Gt||"object"==typeof Jt||"function"==typeof Yt};var Wt=function(){return/^\s*function\s*([^(]*)/i},Xt=Wt;v(Xt,"REGEXP",Wt());var zt=Xt,$t=T;var Ht=Array.isArray?Array.isArray:function(t){return"[object Array]"===$t(t)},qt=Ht;var Kt=function(t){return null!==t&&"object"==typeof t};v(Kt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!qt(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(Kt));var Qt=Kt,Zt=Qt;var tr=T,rr=zt.REGEXP,er=function(t){return Zt(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var nr=function(t){var r,e,n;if(("Object"===(e=tr(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=rr.exec(n.toString()))return r[1]}return er(t)?"Buffer":e},ir=nr;var or=nr;var ar=function(t){var r;return null===t?"null":"object"===(r=typeof t)?ir(t).toLowerCase():r},fr=function(t){return or(t).toLowerCase()},ur=kt()?fr:ar,sr=ur;var cr=function(t){return"function"===sr(t)},lr=RegExp.prototype.exec;var hr=T,pr=function(t){try{return lr.call(t),!0}catch(t){return!1}},yr=b();var _r=Mt,vr=cr,gr=Bt.isPrimitive,dr=function(t){return"object"==typeof t&&(t instanceof RegExp||(yr?pr(t):"[object RegExp]"===hr(t)))};var br=function(t,r,e){if(!gr(t))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+t+"`.");if(gr(r))r=_r(r),r=new RegExp(r,"g");else if(!dr(r))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+r+"`.");if(!gr(e)&&!vr(e))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+e+"`.");return t.replace(r,e)},mr=gt,wr=dt,Or={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var Ar=function(){var t,r,e,n,i,o,a;if(r=this._shape.length,n="ndarray( '"+(i=this._dtype)+"', ",t="",this._length<=100)if("complex64"===i||"complex128"===i)for(a=0;a<this._length;a++)o=this.iget(a),t+=mr(o)+", "+wr(o),a<this._length-1&&(t+=", ");else for(a=0;a<this._length;a++)t+=this.iget(a),a<this._length-1&&(t+=", ");else{if("complex64"===i||"complex128"===i)for(a=0;a<3;a++)o=this.iget(a),t+=mr(o)+", "+wr(o),a<2&&(t+=", ");else for(a=0;a<3;a++)t+=this.iget(a),a<2&&(t+=", ");if(t+=", ..., ","complex64"===i||"complex128"===i)for(a=2;a>=0;a--)o=this.iget(this._length-1-a),t+=mr(o)+", "+wr(o),a>0&&(t+=", ");else for(a=2;a>=0;a--)t+=this.iget(this._length-1-a),a>0&&(t+=", ")}if(e=Or[this.dtype],n+=br(e,"{{data}}",t),n+=", ",n+=0===r?"[]":"[ "+this._shape.join(", ")+" ]",n+=", ",n+="[ ",0===r)n+="0";else for(a=0;a<r;a++)this._strides[a]<0?n+=-this._strides[a]:n+=this._strides[a],a<r-1&&(n+=", ");return n+=" ]",n+=", ",n+="0",n+=", ",n+="'"+this._order+"'",n+=" )"},jr=T,Er="function"==typeof Uint8Array;var Ir="function"==typeof Uint8Array?Uint8Array:null,Ur=function(t){return Er&&t instanceof Uint8Array||"[object Uint8Array]"===jr(t)},Sr=Ir;var Nr=function(){var t,r;if("function"!=typeof Sr)return!1;try{r=new Sr(r=[1,3.14,-3.14,256,257]),t=Ur(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Pr="function"==typeof Uint8Array?Uint8Array:void 0,Tr=function(){throw new Error("not implemented")},xr=Nr()?Pr:Tr,Br=T,Rr="function"==typeof Uint16Array;var Lr="function"==typeof Uint16Array?Uint16Array:null,Mr=function(t){return Rr&&t instanceof Uint16Array||"[object Uint16Array]"===Br(t)},Cr=Lr;var Fr=function(){var t,r;if("function"!=typeof Cr)return!1;try{r=new Cr(r=[1,3.14,-3.14,65536,65537]),t=Mr(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t};var Vr,Dr="function"==typeof Uint16Array?Uint16Array:void 0,Gr=function(){throw new Error("not implemented")},Yr={uint16:Fr()?Dr:Gr,uint8:xr};(Vr=new Yr.uint16(1))[0]=4660;var Jr=52===new Yr.uint8(Vr.buffer)[0],kr=T,Wr="function"==typeof ArrayBuffer;var Xr=function(t){return Wr&&t instanceof ArrayBuffer||"[object ArrayBuffer]"===kr(t)},zr=T,$r="function"==typeof Float64Array;var Hr="function"==typeof Float64Array?Float64Array:null,qr=function(t){return $r&&t instanceof Float64Array||"[object Float64Array]"===zr(t)},Kr=Hr;var Qr=function(){var t,r;if("function"!=typeof Kr)return!1;try{r=new Kr([1,3.14,-3.14,NaN]),t=qr(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t};var Zr,te="function"==typeof Float64Array?Float64Array:void 0,re=function(){throw new Error("not implemented")};Zr=Qr()?te:re;var ee="function"==typeof ArrayBuffer?ArrayBuffer:null,ne=Xr,ie=Zr,oe=ee;var ae=function(){var t,r,e;if("function"!=typeof oe)return!1;try{e=new oe(16),(t=ne(e)&&"function"==typeof oe.isView)&&((r=new ie(e))[0]=-3.14,r[1]=NaN,t=t&&oe.isView(r)&&16===e.byteLength&&-3.14===r[0]&&r[1]!=r[1])}catch(r){t=!1}return t};var fe="function"==typeof ArrayBuffer?ArrayBuffer:void 0,ue=function(){throw new Error("not implemented")},se=ae()?fe:ue,ce=T,le="function"==typeof DataView;var he="function"==typeof DataView?DataView:null,pe=function(t){return le&&t instanceof DataView||"[object DataView]"===ce(t)},ye=se,_e=he;var ve=function(){var t,r,e;if("function"!=typeof _e)return!1;try{e=new ye(24),r=new _e(e,8),(t=pe(r)&&"function"==typeof r.getFloat64&&"function"==typeof r.setFloat64)&&(r.setFloat64(0,-3.14),r.setFloat64(8,NaN),t=t&&r.buffer===e&&16===r.byteLength&&8===r.byteOffset&&-3.14===r.getFloat64(0)&&r.getFloat64(8)!=r.getFloat64(8))}catch(r){t=!1}return t};var ge="function"==typeof DataView?DataView:void 0,de=function(){throw new Error("not implemented")},be=ve()?ge:de,me="function"==typeof BigInt?BigInt:void 0,we=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var Oe=function(){return we.slice()};var Ae=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},je=p;var Ee=function(t,r,e){je(t,r,{configurable:!1,enumerable:!0,writable:!1,value:e})},Ie=Ee;var Ue=function(t){return Object.keys(Object(t))},Se=Ue;var Ne=function(){return function(){return 2!==(Se(arguments)||"").length}(1,2)},Pe=void 0!==Object.keys,Te=T;var xe=function(t){return"[object Arguments]"===Te(t)},Be=xe;var Re=function(){return Be(arguments)}();var Le=function(t){return"number"==typeof t},Me=Number,Ce=Me.prototype.toString;var Fe=T,Ve=Me,De=function(t){try{return Ce.call(t),!0}catch(t){return!1}},Ge=b();var Ye=function(t){return"object"==typeof t&&(t instanceof Ve||(Ge?De(t):"[object Number]"===Fe(t)))},Je=Le,ke=Ye;var We=v,Xe=function(t){return Je(t)||ke(t)},ze=Ye;We(Xe,"isPrimitive",Le),We(Xe,"isObject",ze);var $e=Xe;var He=function(t){return t!=t},qe=$e.isPrimitive,Ke=He;var Qe=function(t){return qe(t)&&Ke(t)},Ze=$e.isObject,tn=He;var rn=function(t){return Ze(t)&&tn(t.valueOf())},en=Qe,nn=rn;var on=v,an=function(t){return en(t)||nn(t)},fn=rn;on(an,"isPrimitive",Qe),on(an,"isObject",fn);var un=an,sn=Number.POSITIVE_INFINITY,cn=Me.NEGATIVE_INFINITY,ln=Math.floor,hn=ln;var pn=function(t){return hn(t)===t},yn=sn,_n=cn,vn=pn;var gn=function(t){return t<yn&&t>_n&&vn(t)},dn=$e.isPrimitive,bn=gn;var mn=function(t){return dn(t)&&bn(t)},wn=$e.isObject,On=gn;var An=function(t){return wn(t)&&On(t.valueOf())},jn=mn,En=An;var In=v,Un=function(t){return jn(t)||En(t)},Sn=An;In(Un,"isPrimitive",mn),In(Un,"isObject",Sn);var Nn,Pn=Un,Tn=Object.prototype.propertyIsEnumerable;Nn=!Tn.call("beep","0");var xn=Bt,Bn=un.isPrimitive,Rn=Pn.isPrimitive,Ln=Tn,Mn=Nn;var Cn=function(t,r){var e;return null!=t&&(!(e=Ln.call(t,r))&&Mn&&xn(t)?!Bn(r=+r)&&Rn(r)&&r>=0&&r<t.length:e)},Fn=Cn,Vn=j,Dn=Fn,Gn=Ht,Yn=pn;var Jn=Re?xe:function(t){return null!==t&&"object"==typeof t&&!Gn(t)&&"number"==typeof t.length&&Yn(t.length)&&t.length>=0&&t.length<=4294967295&&Vn(t,"callee")&&!Dn(t,"callee")},kn=Jn,Wn=Ue,Xn=Array.prototype.slice;var zn=function(t){return kn(t)?Wn(Xn.call(t)):Wn(t)};var $n=Fn((function(){}),"prototype"),Hn=!Fn({toString:null},"toString"),qn=pn;var Kn=un,Qn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&qn(t.length)&&t.length>=0&&t.length<=9007199254740991},Zn=Bt.isPrimitive,ti=Pn.isPrimitive;var ri,ei=function(t){return t.constructor&&t.constructor.prototype===t},ni="undefined"==typeof window?void 0:window,ii=j,oi=function(t,r,e){var n,i;if(!Qn(t)&&!Zn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!ti(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;i=e}else(i=n+e)<0&&(i=0)}else i=0;if(Kn(r)){for(;i<n;i++)if(Kn(t[i]))return i}else for(;i<n;i++)if(t[i]===r)return i;return-1},ai=ur,fi=ei,ui=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],si=ni;ri=function(){var t;if("undefined"===ai(si))return!1;for(t in si)try{-1===oi(ui,t)&&ii(si,t)&&null!==si[t]&&"object"===ai(si[t])&&fi(si[t])}catch(t){return!0}return!1}();var ci="undefined"!=typeof window,li=ri,hi=ei,pi=ci;var yi=Qt,_i=j,vi=Jn,gi=$n,di=Hn,bi=function(t){if(!1===pi&&!li)return hi(t);try{return hi(t)}catch(t){return!1}},mi=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var wi,Oi=Ue,Ai=zn,ji=function(t){var r,e,n,i,o,a,f;if(i=[],vi(t)){for(f=0;f<t.length;f++)i.push(f.toString());return i}if("string"==typeof t){if(t.length>0&&!_i(t,"0"))for(f=0;f<t.length;f++)i.push(f.toString())}else{if(!1===(n="function"==typeof t)&&!yi(t))return i;e=gi&&n}for(o in t)e&&"prototype"===o||!_i(t,o)||i.push(String(o));if(di)for(r=bi(t),f=0;f<mi.length;f++)a=mi[f],r&&"constructor"===a||!_i(t,a)||i.push(String(a));return i};wi=Pe?Ne()?Ai:Oi:ji;var Ei=Ie,Ii=wi;var Ui=function(t,r){var e,n,i;for(e=Ii(r),i=0;i<e.length;i++)n=e[i],Ei(t,n,r[n]);return t},Si=Oe,Ni=Ae,Pi=Ui;v(Si,"enum",Ni),Pi(Si,Ni());var Ti=Si,xi=["row-major","column-major"];var Bi=function(){return xi.slice()};v(Bi,"enum",(function(){return{"row-major":1,"column-major":2}}));var Ri=Bi,Li=["throw","clamp","wrap"];var Mi=function(){return Li.slice()};v(Mi,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Ci=Mi,Fi=Jr,Vi=se,Di=be,Gi=me,Yi=Ri.enum,Ji=Ci.enum,ki=(0,Ti.enum)(),Wi=Yi(),Xi=Ji();var zi=function(){var t,r,e,n,i,o,a,f,u,s,c,l,h,p;if(u=this._mode||"throw",a=this._submode||[u],e=33+16*(l=this._ndims)+(h=a.length),(f=this.__meta_dataview__)&&f.byteLength===e)return f;for(f=new Di(new Vi(e)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,s=0,f.setInt8(s,Fi?1:0),s+=1,f.setInt16(s,ki[n],Fi),s+=2,f.setBigInt64(s,Gi(l),Fi),c=8*l,s+=8,p=0;p<l;p++)f.setBigInt64(s,Gi(i[p]),Fi),f.setBigInt64(s+c,Gi(o[p]*t),Fi),s+=8;for(s+=c,f.setBigInt64(s,Gi(this._offset*t),Fi),s+=8,f.setInt8(s,Wi[this._order]),s+=1,f.setInt8(s,Xi[u]),s+=1,f.setBigInt64(s,Gi(h),Fi),s+=8,p=0;p<h;p++)f.setInt8(s,Xi[a[p]]),s+=1;return r=0,r|=this._flags.READONLY?4:0,f.setInt32(s,r,Fi),this.__meta_dataview__=f,f},$i=Jr,Hi=xr,qi=be,Ki=ln;var Qi=function(t){var r,e,n,i;return r=new Hi(8),0===t||(i=(4294967295&t)>>>0,n=Ki(t/4294967296),e=new qi(r.buffer),$i?(e.setUint32(0,i,$i),e.setUint32(4,n,$i)):(e.setUint32(0,n,$i),e.setUint32(4,i,$i))),r},Zi=Jr,to=be,ro=ln,eo=new xr(8),no=new to(eo.buffer);var io=Qi;v(io,"assign",(function(t,r,e,n){var i,o,a;if(0===t){for(a=0;a<eo.length;a++)r[n]=0,n+=e;return r}for(o=(4294967295&t)>>>0,i=ro(t/4294967296),Zi?(no.setUint32(0,o,Zi),no.setUint32(4,i,Zi)):(no.setUint32(0,i,Zi),no.setUint32(4,o,Zi)),a=0;a<eo.length;a++)r[n]=eo[a],n+=e;return r}));var oo=Jr,ao=se,fo=be,uo=xr,so=Ri.enum,co=Ci.enum,lo=io.assign,ho=(0,Ti.enum)(),po=so(),yo=co();var _o=Q,vo=v,go=rt,bo=nt,mo=it,wo=at,Oo=ft,Ao=ut,jo=lt,Eo=ht,Io=pt,Uo=yt,So=_t,No=vt,Po=wt,To=Ar,xo=zi,Bo=function(){var t,r,e,n,i,o,a,f,u,s,c,l,h,p,y;if(s=this._mode||"throw",f=this._submode||[s],n=33+16*(h=this._ndims)+(p=f.length),(u=this.__meta_dataview__)&&u.byteLength===n)return u;for(u=new fo(new ao(n)),r=new uo(u.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,u.setInt8(c,oo?1:0),c+=1,u.setInt16(c,ho[i],oo),lo(h,r,1,c+=2),l=8*h,c+=8,y=0;y<h;y++)lo(o[y],r,1,c),lo(a[y]*t,r,1,c+l),c+=8;for(c+=l,lo(this._offset*t,r,1,c),c+=8,u.setInt8(c,po[this._order]),c+=1,u.setInt8(c,yo[s]),lo(p,r,1,c+=1),c+=8,y=0;y<p;y++)u.setInt8(c,yo[f[y]]),c+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(c,e,oo),this.__meta_dataview__=u,u};function Ro(t,r,e,n,i,o){var a,f,u,s,c;if(!(this instanceof Ro))return new Ro(t,r,e,n,i,o);for(s=1,c=0;c<e.length;c++)s*=e[c];return f=r.BYTES_PER_ELEMENT?r.BYTES_PER_ELEMENT*s:null,this._byteLength=f,this._bytesPerElement=bo(t),this._buffer=r,this._dtype=t,this._length=s,this._ndims=e.length,this._offset=i,this._order=o,this._shape=e,this._strides=n,this._accessors=Boolean(r.get&&r.set),this._iterationOrder=mo(n),a=jo(s,e,n,i,this._iterationOrder),u=wo(n),this._flags={ROW_MAJOR_CONTIGUOUS:Ao(u,a),COLUMN_MAJOR_CONTIGUOUS:Oo(u,a),READONLY:!1},this.__meta_dataview__=null,this}vo(Ro,"name","ndarray"),go(Ro.prototype,"byteLength",(function(){return this._byteLength})),go(Ro.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),go(Ro.prototype,"data",(function(){return this._buffer})),go(Ro.prototype,"dtype",(function(){return this._dtype})),go(Ro.prototype,"flags",(function(){return Eo(this._flags)})),go(Ro.prototype,"length",(function(){return this._length})),go(Ro.prototype,"ndims",(function(){return this._ndims})),go(Ro.prototype,"offset",(function(){return this._offset})),go(Ro.prototype,"order",(function(){return this._order})),go(Ro.prototype,"shape",(function(){return this._shape.slice()})),go(Ro.prototype,"strides",(function(){return this._strides.slice()})),vo(Ro.prototype,"get",No),vo(Ro.prototype,"iget",Io),vo(Ro.prototype,"set",So),vo(Ro.prototype,"iset",Uo),vo(Ro.prototype,"toString",To),vo(Ro.prototype,"toJSON",Po),vo(Ro.prototype,"__array_meta_dataview__",_o()?xo:Bo);var Lo=Ro,Mo=function(t){var r,e;for(r=[],e=0;e<t.length;e++)r.push(t[e]);return r};var Co=function(t,r){var e,n,i,o,a,f,u,s,c;if((a=r.length)<(f=(i=t.shape).length))throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(e=[],s=0;s<a;s++)e.push(0);for(o=t.strides,s=a-1;s>=0;s--)if(!((c=f-a+s)<0)){if(u=i[c],0!==(n=r[s])&&n<u)throw new Error("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: ("+Mo(i).join(", ")+"). Desired shape: ("+Mo(r).join(", ")+"). Dimension: "+s+".");if(u===n)e[s]=o[c];else{if(1!==u)throw new Error("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: ("+Mo(i).join(", ")+"). Desired shape: ("+Mo(r).join(", ")+"). Dimension: "+s+".");e[s]=0}}return Lo(t.dtype,t.data,Mo(r),e,t.offset,t.order)};var Fo=function(t,r){var e,n,i;if(n=r.length,(e=t.shape).length===n){for(i=0;i<n;i++)if(e[i]!==r[i])return Co(t,r);return t}return Co(t,r)};export{Fo as default};
//# sourceMappingURL=mod.js.map
