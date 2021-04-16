import t from"moment-timezone";import r from"moment";function n(t,r=2){const n=[];for(let e=0;e<Math.ceil(t.length/r);e++){const o=e*r,i=o+r;n.push(t.slice(o,i))}return n}function e(t){return Array.isArray(t)?t.length>0&&t[0]:t}function*o(t,r,n=1){for(let e=t;e<=r;e+=n)yield e}function i(t,r=2){return t?t instanceof Buffer?n(t.toString("hex"),r):Array.isArray(t)?t:n(t.replace(/ /g,""),r):[]}function u(t,r=!1){if(!Array.isArray(t))return"number"==typeof t?t:0;const n=r?t.map((t=>t||0)):t.filter((t=>!!(t&&t>0)));n.sort(((t,r)=>t-r));const e=Math.floor((n.length-1)/2),o=Math.ceil((n.length-1)/2);return(n[e]+n[o])/2}function f(t,r){if(!Array.isArray(t))return"number"==typeof t?t:0;const n=r?t.map((t=>t||0)):t.filter((t=>t));return n.reduce(((t,r)=>t+r),0)/n.length}function c(t){return Array.isArray(t)?t:[t]}function s(t,r,n=1){return Array.from(o(t,r,n))}function a(t,r=!1){return c(t).reduce(((t,n)=>n&&"number"==typeof n&&0!==n?t+n:n&&"string"==typeof n&&r?t+(parseInt(n,10)||0):t),0)}const l="object"==typeof self&&self.self===self&&self||"object"==typeof window&&window.window===window&&window||"object"==typeof global&&global.global===global&&global,h="'@#$%¨&*()_+{}?^:><|¹²³£¢¬§ªº°;.,~´`=-";function p(t){return t.slice(1)}function d(t){return t.slice(0,t.length-1)}function y(t){if(!t)return"";return t.trim().split(" ")[0]}function m(t){if(!t)return"";return t.trim().split(" ").slice(-1).join(" ")}function g(t,r,n){if(!t)return"";if(Array.isArray(r)){let e=`${t}`;for(let t=0;t<r.length;t++)e=g(e,r[t],n);return e}return t.split(r).join(n)}function A(t,r="'@#$%¨&*()_+{}?^:><|¹²³£¢¬§ªº°;.,~´`=-",n=""){if(!t)return"";if(Array.isArray(t))return t.map((t=>A(t,r,n)));const e=Array.isArray(r)?r:r.split("");let o=t;for(let t=0;t<e.length;t++)o=g(o,e[t],n);return o}function M(t){if(!t)return"";const r=["de","do","da","dos","das","a","o","as","os","e","di"];return t.toLowerCase().trim().split(" ").map((t=>r.indexOf(t)<0?`${t[0].toUpperCase()}${t.slice(1)}`:t)).join(" ")}function b(t){if(!t)return!1;if(t.indexOf(":")>=0&&17!==t.length)return!1;if(t.indexOf(":")<0&&12!==t.length)return!1;return/^[a-fA-F0-9:]{17}|[a-fA-F0-9]{12}$/g.test(t)}function w(t){return/[0-9A-Fa-f]{6}/g.test(t)}function $(t){let r;return r=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0],r=r.split(":")[0],r=r.split("?")[0],r}function j(t,r){if(!r)return"";const n=`${r}`;let e="";for(let r=0,o=0;r<t.length&&o<n.length;r++)e+="X"===t.charAt(r)?n.charAt(o++):t.charAt(r);return e}function C(t){return/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t)}function Y(t,r=2){if(!t||0===t)return"0 Bytes";const n=t<0?-1*t:t,e=r<0?0:r,o=Math.floor(Math.log(n)/Math.log(1024));return`${parseFloat((n/Math.pow(1024,o)).toFixed(e))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][o]}`}function S(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,((t,r)=>0===r?t.toLowerCase():t.toUpperCase())).replace(/\s+/g,"")}function B(t){if("object"!=typeof t||t instanceof Date)return"";const r=[];return Object.keys(t).forEach((n=>{const e=`${t[n]}`;l&&l.encodeURIComponent&&r.push(`${n}=${l.encodeURIComponent(e)}`)})),r.length?r.join("&"):""}function O(t){const r=new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);return t&&r.test(t)}function x(t){if(Array.isArray(t))return t.map((t=>x(t)));return!!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(t)}function D(t){try{return!(null==t)}catch(t){return!1}}function E(t,r=!0){return null==t?r:t}function k(t,r,n){const e=t=>t.replace(/^0+/,"");try{const o=Number(t).toString(16).toLocaleUpperCase(),i=o.length%2!=0?o.length+1:o.length;return n?e(o):o.padStart(r||i,"0")}catch(t){const o="00";return n?e(o):o.padStart(r||2,"0")}}function F(t){try{const r=Number(t).toString(16).toLocaleUpperCase(),n=r.length%2!=0?r.length+1:r.length;return r.padStart(n,"0")}catch(t){return`0${(0).toString(16)}`.slice(-2).toUpperCase()}}function H(t){const r=parseInt(t,10);return!!(Number.isInteger(r)||r<=0)&&r}function U(t,r){try{if(!t)return"";let n="";t instanceof Buffer&&(n=t.toString("hex").toUpperCase()),Array.isArray(t)&&(n=t.join("").toUpperCase()),n=require("chunk")(n,2);let e="";for(let t=0;t<n.length;t++){const o=v(n[t]);r?e+=o>=40&&o<=126?String.fromCharCode(o):" ":o>=40&&o<=126&&(e+=String.fromCharCode(o))}return e}catch(t){throw new Error('install module "chunk"')}}function z(t){const r=t.toString();let n="";for(let t=0;t<r.length&&"00"!==r.substr(t,2);t+=2)n+=String.fromCharCode(parseInt(r.substr(t,2),16));return n}function q(t){try{return t instanceof Buffer?t.toString("utf8"):Array.isArray(t)?Buffer.from(t.join(""),"hex").toString("utf8"):Buffer.from(t,"hex").toString("utf8")}catch(t){return""}}function I(t){const r=[];for(let n=0,e=t.length;n<e;n++){const e=Number(t.charCodeAt(n)).toString(16);r.push(e)}return r.join("")}function v(t){if(Array.isArray(t))return t.map((t=>v(t)));try{return parseInt(t,16)}catch(t){return 0}}function R(t,r){const n=Object.keys(t);for(let t=0;t<n.length;t++)if(r.includes(n[t]))return!0;return!1}function N(t,r,n){return t&&r&&t[r]&&t[r]||n}function _(t,r){if("object"!=typeof t||"object"!=typeof r)return t;const n={...t};return Object.keys(n).forEach((t=>{t in r&&D(r[t])&&(n[t]=r[t])})),n}function L(t){return t&&"object"==typeof t&&!Array.isArray(t)&&!(t instanceof Date)}function Z(t,r){const n={},e=Object.keys(t);for(let o=0;o<e.length;o++){const i=e[o];r.includes(i)||(n[i]=t[i])}return n}function G(t,r=[]){if(Array.isArray(t))return t.map((t=>G(t,r)));if("object"!=typeof t)return{};const n={},e=[];return Array.isArray(r)?r.forEach((t=>e.push(t))):"object"==typeof r?Object.keys(r).forEach((t=>e.push(t))):c(r).forEach((t=>e.push(t))),Object.keys(t).forEach((r=>{e.includes(r)&&(n[r]=t[r])})),n}function K(t,r="asc"){return function(n,e){if(!(t in n)||!(t in e))return 0;const o="string"==typeof n[t]?n[t].toUpperCase():n[t],i="string"==typeof e[t]?e[t].toUpperCase():e[t];let u=0;return o>i?u=1:o<i&&(u=-1),"desc"===r?-1*u:u}}function P(t,...r){if(!r.length)return t;const n=r.shift();if(L(t)&&L(n)){const r=Object.keys(n);for(let e=0;e<r.length;e++){const o=r[e];L(n[o])?(t[o]||Object.assign(t,{[o]:{}}),P(t[o],n[o])):Object.assign(t,{[o]:n[o]})}}return P(t,...r)}function T(t,r=4){if(!t||t&&0===t)return 0;const n=Math.pow(10,r),e=t*n;return Math.round(e)/n}function X(t,r=4){return!t||t&&0===t?"0":"string"==typeof t?parseFloat(t).toFixed(r):"number"==typeof t?t.toFixed(r):"0"}function Q(t,r){return Math.random()*(r-t)+t}function J(t,r){return t=Math.ceil(t),r=Math.floor(r),Math.floor(Math.random()*(r-t+1))+t}function V(t,r="123456789ABCEFGHKMPQRSTXYZ"){try{const n=function(t){try{return!!require.resolve(t)}catch(r){return console.error(`'${t}' is not found`)&&!1}}("get-random-values")&&require("get-random-values");return n&&Array(t).fill("").map((()=>{const t=Math.floor(n(new Uint8Array(1))[0]/256*r.length);return r[t]})).join("")}catch{throw new Error('install module "get-random-values"')}}function W(t){if(Array.isArray(t))return W(t[J(0,t.length-1)]);if("object"==typeof t){const r=Object.keys(t),n=r[J(0,r.length-1)];if(n in t)return t[n]}if("function"==typeof t)return W(t());const r=(t||"123456789ABCEFGHKMPQRSTXYZ").toString().split("");return r[J(0,r.length-1)]}function tt(t=16){const{randomBytes:r}=require("crypto");return r(t).toString("hex")}function rt(t,r=""){const{v4:n}=require("uuid");return require("md5")(`${n()}${JSON.stringify(t)}${r}${tt()}`)}function nt(t,r=""){try{return require("md5")(`${t}${r}`)}catch{throw new Error('install module "md5"')}}function et(t,r){try{const n=require("md5")(`${t}`);return r?Buffer.from(require("chunk")(n,2)):n}catch{throw new Error('hashMd5 needs the "chunk" and "md5" dependencies')}}function ot(t){return/[a-fA-F0-9]{32}/.test(t)}function it(t){const r=1440,n=10080,e=302400,o=3628800;let i=t<0?-1*t:t,u="";if(i>o){const t=Math.floor(i/o);u+=`${t}y `,i-=o*t}if(i>e){const t=Math.floor(i/e);u+=`${t}mo `,i-=e*t}if(i>n){const t=Math.floor(i/n);u+=`${t}se `,i-=n*t}if(i>r){const t=Math.floor(i/r);u+=`${t}d `,i-=r*t}if(i>60){const t=Math.floor(i/60);u+=`${t}h `,i-=60*t}if(i>1){u+=`${Math.floor(i/1)}m`}else if(i>0){const t=60*i;u+=`${Math.floor(t)}seg`}return u}function ut(r){const n=t().diff(t(r,"YYYY-MM-DD HH:mm:ss"));return it(t.duration(n).asMinutes())||0}function ft(r,n=Date.now()){const e=t(r).diff(t(n));return t.duration(e).asMinutes()}function ct(r,n="YYYY-MM-DD HH:mm:ss",e="America/Fortaleza"){return e?t(r).tz(e).format(n):t(r).format(n)}function st(r,n,e="YYYY-MM-DD HH:mm:ss"){return r?r instanceof Date?t(r).format(e):t.isMoment(r)?r.format(e):t(r,n).format(e):t().format(e)}function at(r,n){const e={start:t(r).startOf("month"),end:t(r).endOf("month")};if("boolean"==typeof n)return n?{start:e.start,end:e.end}:{start:e.toDate(),end:e.toDate()};const o=n||"YYYY-MM-DD HH:mm:ss";return{start:t(r).startOf("month").format(o),end:t(r).endOf("month").format(o)}}function lt(t,r,n){const e=ct(t,r,n).split(" "),o=e.length>1?e[1]:"00:00:00";return{date:e.length>0?e[0]:"Invalid date",time:o}}function ht(t,n){return!!r(t,n||"YYYY-MM-DD HH:mm:ss",!0).isValid()}const pt={primary:"#000",secundary:"#0c0",contrast:"#00C",text:"#000",rounded:0};export{I as ASCToHex,f as averageInArray,i as buffToArray,S as camelize,K as compareValues,ct as dateToStrTimeZone,h as defaultForbidenChars,pt as defaultTheme,ft as diffExpires,$ as extractHostname,lt as extractOfDateTime,y as firstWord,c as forceArray,Y as formatBytes,rt as generateIdPass,W as getInRamdom,tt as getRamdomHex,V as getRamdomStr,Q as getRandomArbitrary,J as getRandomInt,ut as getUpTime,N as getValue,et as hashMD5,nt as hashPassword,z as hex2a,q as hexToASC,U as hexToAlphaNumeric,v as hexToInt,k as intToHex,F as intToHex2,D as isDefined,O as isEmail,w as isHexReg,b as isMAC,ot as isMD5,L as isObject,ht as isValidDate,C as isValidTime,m as lastWord,u as medianInArray,P as mergeDeep,_ as mirrorNotNullObject,E as notNull,R as objectHasKeys,Z as objectWithoutProperties,G as onlyWithProperties,o as range,s as rangeArray,at as rangedMonth,A as removeAll,g as replaceAll,p as rmFirstChar,d as rmLastChar,T as round,X as round2,st as strDateFromTo,a as sumArray,it as timeRest,M as titleize,j as toMask,H as tryInteger,e as unArray,B as urlEncodeObject,x as validURL};
//# sourceMappingURL=index.es.js.map
