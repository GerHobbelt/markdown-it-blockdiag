module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var u=r[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var u in e)t.d(n,u,function(r){return e[r]}.bind(null,u));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=4)}([function(e,r){e.exports=require("axios")},function(e,r){e.exports=require("url-join")},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=o(t(1)),u=o(t(0));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(u,o){try{var a=r[u](o),i=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(i).then(function(e){n("next",e)},function(e){n("throw",e)});e(i)}("next")})}}var i=function(e,r,t){return a(regeneratorRuntime.mark(function o(){var a,i,c,s,f;return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,a=(0,n.default)(t,"api","v1",e),o.next=4,u.default.post(a,JSON.stringify({source:r}),{headers:{"Content-Type":"application/json"}});case 4:return i=o.sent,o.next=7,i.data;case 7:return c=o.sent,o.abrupt("return",c.image);case 11:return o.prev=11,o.t0=o.catch(0),o.t0.response.data?(s=o.t0.response.data.etype,f=o.t0.response.data.error):(s=o.t0.response.status,f=o.t0.response.statusText),o.abrupt("return","<pre>"+s+"\n"+f+"\n"+r+"</pre>");case 15:case"end":return o.stop()}},o,void 0,[[0,11]])}))().then(function(e){return e})};r.default=function(e,r){var t,n=(r=r||{}).generateSourceUrl||"http://localhost:8000/",u=e.renderer.rules.fence.bind(e.renderer.rules);e.renderer.rules.fence=(t=a(regeneratorRuntime.mark(function e(r,t,o,c,s){var f,p,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(f=r[t],p=f.content.trim(),"blockdiag"!==f.info){e.next=5;break}return l=a(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(f.info,p,n);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,void 0)}))(),e.abrupt("return",l);case 5:return e.abrupt("return",u(r,t,o,c,s));case 6:case"end":return e.stop()}},e,void 0)})),function(e,r,n,u,o){return t.apply(this,arguments)})}},function(e,r){e.exports=require("babel-polyfill")},function(e,r,t){t(3),e.exports=t(2)}]);
//# sourceMappingURL=index.js.map