import r from"chunk";function t(r){return Array.isArray(r)?r||[]:[r]}function n(r){return Array.isArray(r)?r.length>0&&r[0]:r}function*e(r,t,n=1){for(let e=r;e<=t;e+=n)yield e}function i(r,t,n=1){return Array.from(e(r,t,n))}function u(t,n=2){return t?t instanceof Buffer?r(t.toString("hex"),n):Array.isArray(t)?t:r(t.replace(/ /g,""),n):[]}const f="'@#$%¨&*()_+{}?^:><|¹²³£¢¬§ªº°;.,~´`=-";function o(r){return r.slice(1)}function a(r){return r.slice(0,r.length-1)}function s(r){if(!r)return"";return r.trim().split(" ")[0]}function c(r,t,n){if(!r)return"";if(Array.isArray(t)){let e=`${r}`;for(let r=0;r<t.length;r++)e=c(e,t[r],n);return e}return r.split(t).join(n)}function l(r,t="'@#$%¨&*()_+{}?^:><|¹²³£¢¬§ªº°;.,~´`=-",n=""){if(!r)return"";if(Array.isArray(r))return r.map((r=>l(r,t,n)));const e=Array.isArray(t)?t:t.split("");let i=r;for(let r=0;r<e.length;r++)i=c(i,e[r],n);return i}function A(r){if(!r)return"";const t=["de","do","da","dos","das","a","o","as","os","e","di"];return r.toLowerCase().trim().split(" ").map((r=>t.indexOf(r)<0?`${r[0].toUpperCase()}${r.slice(1)}`:r)).join(" ")}function p(r){if(!r)return!1;if(r.indexOf(":")>=0&&17!==r.length)return!1;if(r.indexOf(":")<0&&12!==r.length)return!1;return/^[a-fA-F0-9:]{17}|[a-fA-F0-9]{12}$/g.test(r)}function y(r){return/[0-9A-Fa-f]{6}/g.test(r)}function d(r){let t;return t=r.indexOf("//")>-1?r.split("/")[2]:r.split("/")[0],t=t.split(":")[0],t=t.split("?")[0],t}function h(r,t){if(!t)return"";const n=`${t}`;let e="";for(let t=0,i=0;t<r.length&&i<n.length;t++)e+="X"===r.charAt(t)?n.charAt(i++):r.charAt(t);return e}function g(r){return/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(r)}var m={primary:"#000",secundary:"#0c0",contrast:"#00C",text:"#000",rounded:0};export{u as buffToArray,f as defaultForbidenChars,m as defaultTheme,d as extractHostname,s as firstWord,t as forceArray,y as isHexReg,p as isMAC,g as isValidTime,e as range,i as rangeArray,l as removeAll,c as replaceAll,o as rmFirstChar,a as rmLastChar,A as titleize,h as toMask,n as unArray};
//# sourceMappingURL=index.es.js.map
