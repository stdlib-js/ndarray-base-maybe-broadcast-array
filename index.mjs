// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-array@esm/index.mjs";var t=r;var a=function(r,a){var e,n,s;if(n=a.length,(e=r.shape).length===n){for(s=0;s<n;s++)if(e[s]!==a[s])return t(r,a);return r}return t(r,a)};export{a as default};
//# sourceMappingURL=index.mjs.map
