// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-array@esm/index.mjs";function t(t,e){var a,n,s;if(n=e.length,(a=t.shape).length===n){for(s=0;s<n;s++)if(a[s]!==e[s])return r(t,e);return t}return r(t,e)}export{t as default};
//# sourceMappingURL=index.mjs.map
