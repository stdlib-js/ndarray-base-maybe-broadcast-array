"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=o(function(l,n){
var u=require('@stdlib/ndarray-base-broadcast-array/dist'),v=require('@stdlib/ndarray-base-shape/dist');function c(e,r){var i,a,t;if(a=r.length,i=v(e,!1),i.length===a){for(t=0;t<a;t++)if(i[t]!==r[t])return u(e,r);return e}return u(e,r)}n.exports=c
});var f=s();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
