"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=o(function(l,n){
var u=require('@stdlib/ndarray-base-broadcast-array/dist'),v=require('@stdlib/ndarray-base-shape/dist');function c(e,r){var t,a,i;if(a=r.length,t=v(e,!1),t.length===a){for(i=0;i<a;i++)if(t[i]!==r[i])return u(e,r);return e}return u(e,r)}n.exports=c
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
