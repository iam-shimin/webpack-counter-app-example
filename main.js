!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=8)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var o=(a=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=r.sources.map((function(n){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([o]).join("\n")}var a,c,u;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);r&&o[u[0]]||(e&&(u[2]?u[2]="".concat(e," and ").concat(u[2]):u[2]=e),t.push(u))}},t}},function(n,t,e){"use strict";var r=e(0),o=e.n(r)()(!1);o.push([n.i,".btn {\r\n\t--primary: #000;\r\n\t--secondary: #fff;\r\n  min-height: 2em;\r\n  min-width: 2em;\r\n  border: solid 0.15rem;\r\n  color: var(--primary);\r\n  background: var(--secondary);\r\n  transition: all 0.3s;\r\n}\r\n\r\n.btn:hover,\r\n.btn:focus {\r\n  color: var(--secondary);\r\n  background: var(--primary);\r\n}\r\n.btn:focus {\r\n\tborder-style: dashed;\r\n}\r\n\r\n.btn-float {\r\n\t--primary: green;\r\n  position: fixed;\r\n  bottom: 1em;\r\n  right: 1em;\r\n  font-size: 2.3rem;\r\n  z-index: 200;\r\n}\r\n\r\n.btn-round {\r\n  border: solid 0.15em;\r\n  border-radius: 50%;\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .btn-float {\r\n    font-size: 3rem;\r\n  }\r\n}",""]),t.a=o},function(n,t,e){"use strict";var r=e(0),o=e.n(r)()(!1);o.push([n.i,".count-actions .btn-round {\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.counter-actions button {\r\n\t--primary: #51518e;\r\n\tborder-radius: 0.3em;\r\n}\r\n\r\n.counter-actions {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tmargin-top: 2em;\r\n}\r\n\r\n.count-actions {\r\n\tdisplay: flex;\r\n\tpadding: 1em 0;\r\n\tborder: solid 0.1em;\r\n}\r\n\r\n.count-actions::after,\r\n.count-actions::before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\twidth: 30%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tborder-radius: 50%;\r\n\tz-index: -1;\r\n}\r\n\r\n.count-actions::after {\r\n\tright: -3em;\r\n\tborder-right: solid;\r\n}\r\n\r\n.count-actions::before {\r\n\tleft: -3em;\r\n\tborder-left: solid;\r\n}\r\n\r\n.count-actions,\r\n.count-actions::before,\r\n.count-actions::after {\r\n\tbackground: #e82ba7;\r\n}\r\n\r\n.count-actions {\r\n\tposition: relative;\r\n}\r\n\r\n.count-actions {\r\n\tborder-left: none;\r\n\tborder-right: none;\r\n\tz-index: 100;\r\n}\r\n\r\n.counter-actions button {\r\n\tborder: solid;\r\n\tmargin: 0 1rem;\r\n\tfont-size: 1rem;\r\n}",""]),t.a=o},function(n,t,e){"use strict";var r=e(0),o=e.n(r)()(!1);o.push([n.i,".draw-over {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tbackground: gray;\r\n\tz-index: 300;\r\n\ttransform: translateY(100%);\r\n\ttransition: transform 0.2s;\r\n\tbox-shadow: 0 0 2rem;\r\n}\r\n\r\n.draw-over.open {\r\n\ttransform: translateY(50%);\r\n}\r\n\r\n#title-bar {\r\n\tcolor: #141417;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n#note {\r\n\twidth: 80%;\r\n\tfont-size: 1.4rem;\r\n\tword-spacing: 5px;\r\n\tline-height: 1.35;\r\n}\r\n\r\n#title-bar h1,\r\n#note {\r\n\tmargin-left: 10%;\r\n}\r\n\r\n#title-bar button {\r\n\talign-self: center;\r\n\tfont-size: 1.5rem;\r\n\tmargin-right: 2rem;\r\n}\r\n\r\n#title-bar h1 {\r\n\tfont-size: 2.6rem;\r\n}",""]),t.a=o},function(n,t,e){"use strict";var r=e(0),o=e.n(r)()(!1);o.push([n.i,"#total {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tpadding: 0.5rem;\r\n\tcolor: grey;\r\n\tbackground: #fff;\r\n\tbox-shadow: inset -0.5rem -1rem 0.95rem -1rem\r\n}\r\n\r\n.message-box {\r\n\tmargin-left: 15%;\r\n}\r\n\r\n.msg,\r\n.message-box p {\r\n\twidth: max-content;\r\n}\r\n\r\n.msg {\r\n\tfont-size: 2.5rem;\r\n\tcolor: #443e3e;\r\n}\r\n\r\n.message-box p {\r\n\tcolor: #eee;\r\n}",""]),t.a=o},function(n,t,e){var r=e(6),o=e(7);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);n.exports=o.locals||{}},function(n,t,e){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),a=[];function c(n){for(var t=-1,e=0;e<a.length;e++)if(a[e].identifier===n){t=e;break}return t}function u(n,t){for(var e={},r=[],o=0;o<n.length;o++){var i=n[o],u=t.base?i[0]+t.base:i[0],s=e[u]||0,d="".concat(u," ").concat(s);e[u]=s+1;var l=c(d),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(m)):a.push({identifier:d,updater:g(m,t),references:1}),r.push(d)}return r}function s(n){var t=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var o=e.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(n){t.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var d,l=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function m(n,t,e,r){var o=e?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function f(n,t,e){var r=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var p=null,b=0;function g(n,t){var e,r,o;if(t.singleton){var i=b++;e=p||(p=s(t)),r=m.bind(null,e,i,!1),o=m.bind(null,e,i,!0)}else e=s(t),r=f.bind(null,e,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var e=u(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<e.length;r++){var o=c(e[r]);a[o].references--}for(var i=u(n,t),s=0;s<e.length;s++){var d=c(e[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}e=i}}}},function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(1),a=e(2),c=e(3),u=e(4),s=o()(!1);s.i(i.a),s.i(a.a),s.i(c.a),s.i(u.a),s.push([n.i,"body {\r\n\tmargin: 0;\r\n\twidth: 100vw;\r\n}\r\n\r\nhtml, body, main {\r\n\theight: 100%;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 3rem;\r\n  overflow-x: auto;\r\n  background: #6cac08;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  main {\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    padding-top: 3rem;\r\n  }\r\n}\r\n\r\n\r\narticle {\r\n  border: solid 0.2em;\r\n  margin: 0.5em;\r\n  padding: 2em 3em;\r\n  border-radius: 0.4em;\r\n\tbox-shadow: 0 0 0.5em;\r\n\ttransition: transform 0.3s cubic-bezier(.77,0,.18,1);\r\n\ttransform: scale(0.9)\r\n}\r\n\r\narticle:hover,\r\narticle:focus-within {\r\n\ttransform: scale(1);\r\n\tbox-shadow: 1em 1em 3em;\r\n}\r\n\r\narticle header {\r\n  padding-bottom: 1em;\r\n}\r\n\r\narticle {\r\n  background: #1e241e;\r\n}\r\n\r\nheader h3 {\r\n  color: #fff;\r\n  width: 18rem;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\nheader {\r\n  color: #aaa;\r\n}\r\n\r\ninput {\r\n  background: #bb95ae;\r\n  border: solid;\r\n  margin: 0 0.5em;\r\n  font-size: 1rem;\r\n}",""]),t.default=s},function(n,t,e){"use strict";e.r(t);function r(){return JSON.parse(localStorage.getItem("counters"))||{}}function o(n){localStorage.setItem("counters",JSON.stringify(n))}var i={};e(5);const[a]=document.getElementsByTagName("main"),c=function(n=document.body){const t=document.createElement("div");t.id="total",t.innerHTML='\n<span id="score">{number}</span>\n<i> Total Counts</i>\n',n.appendChild(t);const[e]=t.getElementsByTagName("span");return function(n){e.textContent=n||0}}(),u=document.getElementById("add-counter"),s={currentCountersCount:0,messageDestroyFunction:null,drawerUpdateFunction:null};function d(n,t){return function(n=document.body,t){const e={title:null,count:null,time:new Date(t.dateString)},r=document.createElement("article");r.innerHTML='\n<header>\n\t<h3>No Title</h3>\n\t<div>\n\t\t<time>12:34 pm</time>\n\t</div>\n</header>\n<div class="count-actions">\n\t<button class="btn btn-round">+</button>\n\t<input type="number" name="count" />\n\t<button class="btn btn-round">-</button>\n</div>\n<div class="counter-actions">\n\t<button class="btn">Save</button>\n\t<button class="btn">Delete</button>\n</div>';const[o,i,a,c]=r.getElementsByTagName("button"),[u]=r.getElementsByTagName("input"),[s]=r.getElementsByTagName("h3"),[d]=r.getElementsByTagName("time");function l(){r.remove()}return d.dateTime=e.time.toISOString(),d.textContent=e.time.toDateString(),n.appendChild(r),r.addEventListener("click",n=>{n.target.tabIndex<0&&t.onCounterBoxClick(t.dataId)}),o.addEventListener("click",n=>{const e=(u.valueAsNumber||0)+1;u.value=e,t.onCounterDataChange("count",e)}),i.addEventListener("click",n=>{const e=(u.valueAsNumber||0)-1;u.value=e,t.onCounterDataChange("count",e)}),c.addEventListener("click",n=>{l(),t.onDelete()}),a.addEventListener("click",n=>{t.onSave(t.dataId)}),{update:function(n="No title",r=null){e.title!==n&&(s.textContent=n,t.onCounterDataChange("title",n)),e.count!==r&&(u.valueAsNumber=r,t.onCounterDataChange("count",r))},distroy:l}}(a,{dataId:n,dateString:t,onCounterBoxClick(){const n=this.dataId;s.drawerUpdateFunction?s.drawerUpdateFunction(n):s.drawerUpdateFunction=function(n=document.body,t){const e={isOpen:!1,currentId:null},r=document.createElement("section");r.id="drawer",r.className="draw-over",r.innerHTML='\n<header id="title-bar">\n\t<h1 contenteditable="true">{title}</h1>\n\t<button class="btn" style="border: solid 0.15em">X</button>\n</header>\n<p id="note" contenteditable="true">{note}</p>',n.appendChild(r);const[o]=r.getElementsByTagName("h1"),[a]=r.getElementsByTagName("p"),[c]=r.getElementsByTagName("button");function u(n){const t=n===e.currentId,r=n!==e.currentId&&!e.isOpen;if((t||r)&&requestAnimationFrame(()=>{requestAnimationFrame(s)}),t)return;const c=i[n]&&i[n].title||"No title",u=i[n]&&i[n].note||"No note";o.textContent=c,a.textContent=u,e.currentId=n}function s(){drawer.classList.toggle("open"),e.isOpen=!e.isOpen}return c.addEventListener("click",n=>{u(e.currentId)}),o.addEventListener("input",n=>{t.onInput(e.currentId,"title",n.currentTarget.textContent)}),a.addEventListener("input",n=>{t.onInput(e.currentId,"note",n.currentTarget.textContent)}),u(t.id),u}(document.body,{id:n,onInput(n,t,e){i[n][t]=e,"title"===t&&i[n].root.update(e)}})},onDelete(){if(--s.currentCountersCount,c(s.currentCountersCount),l(s.currentCountersCount),i[this.dataId].requireCacheSync){const n=r();delete n[this.dataId],o(n)}},onCounterDataChange(n,t){i[this.dataId][n]=t},onSave(n){i[n];i[n].requireCacheSync=!0;const t=r(),{title:e,dateString:a,note:c,count:u}=i[n];t[n]={title:e,dateString:a,note:c,count:u},o(t)}})}function l(n){0===n&&(s.messageDestroyFunction=function(n=document.body){const t=document.createElement("div");return t.className="message-box",t.innerHTML='\n<h2 class="msg">No active counters exist</h2>\n<p>Add counters by clicking on the (+) button.</p>',n.appendChild(t),function(){t.remove()}}(a))}c(s.currentCountersCount),u.addEventListener("click",n=>{const t=Date.now(),e=t+Math.random();0===s.currentCountersCount&&s.messageDestroyFunction&&(s.messageDestroyFunction(),s.messageDestroyFunction=null),++s.currentCountersCount,i[e]={root:d(e,t),dateString:t},c(s.currentCountersCount)});const m=r();for(let n in m){const{title:t,note:e,count:r,dateString:o}=m[n]||{};i[n]={root:d(n,o),title:t,dateString:o,note:e,count:r,requireCacheSync:!0},i[n].root.update(t,r),++s.currentCountersCount}l(s.currentCountersCount),c(s.currentCountersCount)}]);