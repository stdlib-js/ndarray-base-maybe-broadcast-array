"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var o=s(function(q,n){
var a=require('@stdlib/ndarray-base-broadcast-array/dist'),v=require('@stdlib/ndarray-base-shape/dist');function c(e,r){var i,u,t;if(u=r.length,i=v(e),i.length===u){for(t=0;t<u;t++)if(i[t]!==r[t])return a(e,r);return e}return a(e,r)}n.exports=c
});var f=o();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
