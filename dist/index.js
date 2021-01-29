"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("chunk"),r=require("crypto"),e=require("get-random-values"),n=require("uuid"),o=require("md5"),u=require("sharp"),a=require("base64-img"),s=require("fs"),i=require("path"),f=require("moment-timezone");function c(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=c(t),p=c(r),d=c(e),h=c(o),x=c(u),m=c(a),y=c(s),g=c(i),A=c(f);function*M(t,r,e=1){for(let n=t;n<=r;n+=e)yield n}function S(t,r,e){if(!t)return"";if(Array.isArray(r)){let n=`${t}`;for(let t=0;t<r.length;t++)n=S(n,r[t],e);return n}return t.split(r).join(e)}function $(t,r){return t=Math.ceil(t),r=Math.floor(r),Math.floor(Math.random()*(r-t+1))+t}function C(t=16){return p.default.randomBytes(t).toString("hex")}function b(t){try{return!!y.default.existsSync(t)}catch(t){return!1}}function Y(t){const r=1440,e=10080,n=302400,o=3628800;let u=t<0?-1*t:t,a="";if(u>o){const t=Math.floor(u/o);a+=`${t}y `,u-=o*t}if(u>n){const t=Math.floor(u/n);a+=`${t}mo `,u-=n*t}if(u>e){const t=Math.floor(u/e);a+=`${t}se `,u-=e*t}if(u>r){const t=Math.floor(u/r);a+=`${t}d `,u-=r*t}if(u>60){const t=Math.floor(u/60);a+=`${t}h `,u-=60*t}if(u>1){a+=`${Math.floor(u/1)}m`}else if(u>0){const t=60*u;a+=`${Math.floor(t)}seg`}return a}function H(t,r,e){return e?A.default(t).tz(e||"America/Fortaleza").format(r||"YYYY-MM-DD HH:mm:ss"):A.default(t).format(r||"YYYY-MM-DD HH:mm:ss")}function D(t){if(Array.isArray(t))return t.map((t=>D(t)));try{return parseInt(t,16)}catch(t){return 0}}exports.ASCToHex=function(t){const r=[];for(let e=0,n=t.length;e<n;e++){const n=Number(t.charCodeAt(e)).toString(16);r.push(n)}return r.join("")},exports.buffToArray=function(t,r=2){return t?t instanceof Buffer?l.default(t.toString("hex"),r):Array.isArray(t)?t:l.default(t.replace(/ /g,""),r):[]},exports.compareValues=function(t,r="asc"){return function(e,n){if(!(t in e)||!(t in e))return 0;const o="string"==typeof e[t]?e[t].toUpperCase():e[t],u="string"==typeof n[t]?n[t].toUpperCase():n[t];let a=0;return o>u?a=1:o<u&&(a=-1),"desc"===r?-1*a:a}},exports.convertSvgToPng=async function(t,r){try{return await x.default(t).png().toFile(r)}catch(t){return!1}},exports.dateToStrTimeZone=H,exports.defaultForbidenChars="'@#$%¨&*()_+{}?^:><|¹²³£¢¬§ªº°;.,~´`=-",exports.defaultTheme={primary:"#000",secundary:"#0c0",contrast:"#00C",text:"#000",rounded:0},exports.deleteFile=async function(t){try{return b(t)&&await y.default.unlinkSync(t),!0}catch(t){return!1}},exports.diffExpires=function(t,r=Date.now()){const e=A.default(t).diff(A.default(r));return A.default.duration(e).asMinutes()},exports.extName=function(t){return g.default.extname(t)||""},exports.extractHostname=function(t){let r;return r=t.indexOf("//")>-1?t.split("/")[2]:t.split("/")[0],r=r.split(":")[0],r=r.split("?")[0],r},exports.extractOfDateTime=function(t,r,e){const n=H(t,r,e).split(" "),o=n.length>1?n[1]:"00:00:00";return{date:n.length>0?n[0]:"Invalid date",time:o}},exports.fileExists=b,exports.fileHash=function(t,r="md5"){return new Promise(((e,n)=>{try{const n=p.default.createHash(r),o=y.default.ReadStream(t);o.on("data",(t=>{n.update(t)})),o.on("end",(()=>{const t=n.digest("hex");return e(t)}))}catch(t){return n(t)}}))},exports.fileParse=function(t){return g.default.parse(t)||!1},exports.firstWord=function(t){return t?t.trim().split(" ")[0]:""},exports.forceArray=function(t){return Array.isArray(t)?t||[]:[t]},exports.generateIdPass=function(t,r=""){const e=n.v4(),o=JSON.stringify(t);return h.default(`${e}${o}${r}${C()}`)},exports.getInRamdom=function t(r){if(Array.isArray(r))return r[$(0,r.length-1)];if("object"==typeof r){const t=Object.keys(r),e=t[$(0,t.length-1)];if(e in r)return r[e]}if("function"==typeof r)return t(r());const e=(r||"123456789ABCEFGHKMPQRSTXYZ").toString().split("");return e[$(0,e.length-1)]},exports.getRamdomHex=C,exports.getRamdomStr=function(t,r="123456789ABCEFGHKMPQRSTXYZ"){return Array(t).fill("").map((()=>{const t=Math.floor(d.default(new Uint8Array(1))[0]/256*r.length);return r[t]})).join("")},exports.getRandomArbitrary=function(t,r){return Math.random()*(r-t)+t},exports.getRandomInt=$,exports.getUpTime=function(t){const r=A.default().diff(A.default(t,"YYYY-MM-DD HH:mm:ss"));return Y(A.default.duration(r).asMinutes())||0},exports.getValue=function(t,r,e){return void 0===e&&(e=null),t&&t[r]&&t[r]||e},exports.hashMD5=function(t,r){const e=h.default(`${t}`);return r?Buffer.from(l.default(e,2)):e},exports.hashPassword=function(t,r=""){return h.default(`${t}${r}`)},exports.hex2a=function(t){const r=t.toString();let e="";for(let t=0;t<r.length&&"00"!==r.substr(t,2);t+=2)e+=String.fromCharCode(parseInt(r.substr(t,2),16));return e},exports.hexToASC=function(t){try{return t instanceof Buffer?t.toString("utf8"):Array.isArray(t)?Buffer.from(t.join(""),"hex").toString("utf8"):Buffer.from(t,"hex").toString("utf8")}catch(t){return""}},exports.hexToAlphaNumeric=function(t,r){if(!t)return"";let e="";t instanceof Buffer&&(e=t.toString("hex").toUpperCase()),Array.isArray(t)&&(e=t.join("").toUpperCase()),e=l.default(e,2);let n="";for(let t=0;t<e.length;t++){const o=D(e[t]);r?n+=o>=40&&o<=126?String.fromCharCode(o):" ":o>=40&&o<=126&&(n+=String.fromCharCode(o))}return n},exports.hexToInt=D,exports.intToHex=function(t,r,e){const n=t=>t.replace(/^0+/,"");try{const o=Number(t).toString(16).toLocaleUpperCase(),u=o.length%2!=0?o.length+1:o.length;return e?n(o):o.padStart(r||u,"0")}catch(t){const o="00";return e?n(o):o.padStart(r||2,"0")}},exports.intToHex2=function(t){try{const r=Number(t).toString(16).toLocaleUpperCase(),e=r.length%2!=0?r.length+1:r.length;return r.padStart(e,"0")}catch(t){return`0${(0).toString(16)}`.slice(-2).toUpperCase()}},exports.isDefined=function(t){try{return!(null==t)}catch(t){return!1}},exports.isHexReg=function(t){return/[0-9A-Fa-f]{6}/g.test(t)},exports.isMAC=function(t){return!!t&&(!(t.indexOf(":")>=0&&17!==t.length)&&(!(t.indexOf(":")<0&&12!==t.length)&&/^[a-fA-F0-9:]{17}|[a-fA-F0-9]{12}$/g.test(t)))},exports.isMD5=function(t){return/[a-fA-F0-9]{32}/.test(t)},exports.isValidTime=function(t){return/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(t)},exports.notNull=function(t,r=!0){return null==t?r:t},exports.objectHasKeys=function(t,r){for(var e=Object.keys(t),n=0;n<e.length;n++)if(!r.includes(e[n]))return!0;return!1},exports.objectWithoutProperties=function(t,r){const e={},n=Object.keys(t);for(let o=0;o<n.length;o++){const u=n[o];r.includes(u)||(e[u]=t[u])}return e},exports.onlyWithProperties=function(t,r=[]){const e={},n=function(t=[]){return Array.isArray(t)?t:[t]}("object"==typeof r?Object.keys(r):r),o=Object.keys(t);for(let r=0;r<o.length;r++){const u=o[r];n.includes(u)&&(e[u]=t[u])}return e},exports.pathJoin=function(...t){return g.default.join(...t)},exports.range=M,exports.rangeArray=function(t,r,e=1){return Array.from(M(t,r,e))},exports.rangedMonth=function(t,r){const e={start:A.default(t).startOf("month"),end:A.default(t).endOf("month")};if("boolean"==typeof r)return r?{start:e.start,end:e.end}:{start:e.toDate(),end:e.toDate()};const n=r||"YYYY-MM-DD HH:mm:ss";return{start:A.default(t).startOf("month").format(n),end:A.default(t).endOf("month").format(n)}},exports.removeAll=function t(r,e="'@#$%¨&*()_+{}?^:><|¹²³£¢¬§ªº°;.,~´`=-",n=""){if(!r)return"";if(Array.isArray(r))return r.map((r=>t(r,e,n)));const o=Array.isArray(e)?e:e.split("");let u=r;for(let t=0;t<o.length;t++)u=S(u,o[t],n);return u},exports.renameFile=function(t,r,e){try{return e&&b(r)&&y.default.unlinkSync(r),y.default.renameSync(t,r),!0}catch(t){return!1}},exports.replaceAll=S,exports.rmFirstChar=function(t){return t.slice(1)},exports.rmLastChar=function(t){return t.slice(0,t.length-1)},exports.round=function(t,r=4){if(!t||t&&0===t)return 0;const e=Math.pow(10,r),n=t*e;return Math.round(n)/e},exports.round2=function(t,r=4){return!t||t&&0===t?0:"string"==typeof t?parseFloat(t).toFixed(r):"number"==typeof t?t.toFixed(r):0},exports.round3=function(t,r=4){return+`${Math.round(`${t}e+${r}`)}e-${r}`},exports.strDateFromTo=function(t,r,e="YYYY-MM-DD HH:mm:ss"){return t?t instanceof Date?A.default(t).format(e):A.default.isMoment(t)?t.format(e):A.default(t,r).format(e):A.default().format(e)},exports.timeRest=Y,exports.titleize=function(t){if(!t)return"";const r=["de","do","da","dos","das","a","o","as","os","e","di"];return t.toLowerCase().trim().split(" ").map((t=>r.indexOf(t)<0?`${t[0].toUpperCase()}${t.slice(1)}`:t)).join(" ")},exports.toBase64Img=function(t){return m.default.base64Sync(t)},exports.toMask=function(t,r){if(!r)return"";const e=`${r}`;let n="";for(let r=0,o=0;r<t.length&&o<e.length;r++)n+="X"===t.charAt(r)?e.charAt(o++):t.charAt(r);return n},exports.tryInteger=function(t){const r=parseInt(t,10);return!!(Number.isInteger(r)||r<=0)&&r},exports.unArray=function(t){return Array.isArray(t)?t.length>0&&t[0]:t};
//# sourceMappingURL=index.js.map
