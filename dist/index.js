"use strict";var o=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var s=o(function(b,a){
var u=require('@stdlib/ndarray-base-broadcast-array/dist');function c(t,r){var i,n,e;if(n=r.length,i=t.shape,i.length===n){for(e=0;e<n;e++)if(i[e]!==r[e])return u(t,r);return t}return u(t,r)}a.exports=c
});var v=s();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
