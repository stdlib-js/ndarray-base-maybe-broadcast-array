// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-broadcast-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape@v0.1.0-esm/index.mjs";function e(e,s){var n,a,d;if(a=s.length,(n=t(e,!1)).length===a){for(d=0;d<a;d++)if(n[d]!==s[d])return r(e,s);return e}return r(e,s)}export{e as default};
//# sourceMappingURL=index.mjs.map
