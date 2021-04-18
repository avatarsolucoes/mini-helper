"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("crypto"),t=require("fs"),n=require("path");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t);const i=new Function("try {return this===global;}catch(e){return false;}"),a=new Function("try {return this===window;}catch(e){ return false;}");function u(e){try{if(i())return!!o.default.existsSync(e)}catch(e){return!1}}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function c(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function u(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}function f(e,t){var r=(""+(n.extname(e)||".png")).substr(1);return"svg"===r&&(r="svg+xml"),"data:image/"+r+";base64,"+t.toString("base64")}function l(e){var t=e.match(/^data:image\/([\w+]+);base64,([\s\S]+)/),n={jpeg:"jpg","svg+xml":"svg"};if(!t)throw new Error("image base64 data error");return{extname:"."+(n[t[1]]?n[t[1]]:t[1]),base64:t[2]}}function p(e){return f(e,o.default.readFileSync(e))}exports.base64=function(e){return c(this,void 0,void 0,(function(){return s(this,(function(t){return[2,new Promise((function(t){o.default.readFile(e,(function(n,r){var o=n?"":f(e,r);t(o)}))}))]}))}))},exports.base64Sync=p,exports.base64ToFile=function(e,t,r){return c(this,void 0,void 0,(function(){var i,a;return s(this,(function(u){return i=l(e),a=n.join(t,""+r+i.extname),[2,new Promise((function(e){return o.default.writeFile(a,i.base64,{encoding:"base64"},(function(t){return e(t?"":a)}))}))]}))}))},exports.base64ToFileSync=function(e,t,r){var i=l(e),a=n.join(t,""+r+i.extname);return o.default.writeFileSync(a,i.base64,{encoding:"base64"}),a},exports.copyFile=async function(e,t){return!a()&&await new Promise((n=>{o.default.copyFile(e,t,(e=>n(!e)))}))},exports.deleteFile=async function(e){try{return i()&&u(e)&&o.default.unlinkSync(e),!0}catch(e){return!1}},exports.extName=function(e){if(i())return n.extname(e)||""},exports.fileExists=u,exports.fileHash=async function(t,n="md5"){return!a()&&new Promise(((r,i)=>{try{const i=e.createHash(n),a=o.default.ReadStream(t);a.on("data",(e=>i.update(e))),a.on("end",(()=>{const e=i.digest("hex");return r(e)}))}catch(e){return i(e)}}))},exports.fileParse=function(e){if(i())return e&&n.parse(e)},exports.isBrowser=a,exports.isNode=i,exports.pathJoin=function(...e){if(i())return n.join(...e)},exports.renameFile=function(e,t,n){try{return!!i()&&(n&&u(t)&&o.default.unlinkSync(t),o.default.renameSync(e,t),!0)}catch(e){return!1}},exports.toBase64Img=function(e){return p(e)};
//# sourceMappingURL=index.js.map
