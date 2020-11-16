(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+q4Q":function(n,t,r){"use strict";r.r(t);var e=r("JPst"),o=r.n(e),a=r("D2KY"),i=r("45cU"),c=r("PYiw"),s=r("5693"),u=o()(!1);u.i(a.a),u.i(i.a),u.i(c.a),u.i(s.a),u.push([n.i,"body {\r\n\tmargin: 0;\r\n\twidth: 100vw;\r\n}\r\n\r\nmain {\r\n\tmin-height: 100vh;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 3rem;\r\n  overflow-x: auto;\r\n  background: #6cac08;\r\n}\r\n\r\n@media screen and (max-width: 900px) {\r\n  main {\r\n    flex-direction: column;\r\n    box-sizing: border-box;\r\n    padding-top: 3rem;\r\n  }\r\n}\r\n\r\n\r\narticle {\r\n  border: solid 0.2em;\r\n  margin: 1.5em;\r\n  padding: 2em 3em;\r\n  border-radius: 0.4em;\r\n  box-shadow: 0 0 0.5em;\r\n  max-width: 85%;\r\n  /*transition: transform 0.3s cubic-bezier(.77,0,.18,1);*/\r\n  /*transform: scale(0.9)*/\r\n}\r\n\r\narticle:hover,\r\narticle:focus-within {\r\n\t/*transform: scale(1);*/\r\n\tbox-shadow: 1em 1em 3em;\r\n}\r\n\r\narticle header {\r\n  padding-bottom: 1em;\r\n}\r\n\r\narticle {\r\n  background: #1e241e;\r\n}\r\n\r\nheader h3 {\r\n  color: #fff;\r\n  width: 18rem;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\nheader {\r\n  color: #aaa;\r\n}\r\n\r\ninput {\r\n  background: #bb95ae;\r\n  border: solid;\r\n  margin: 0 0.5em;\r\n  font-size: 1rem;\r\n}",""]),t.default=u},"45cU":function(n,t,r){"use strict";var e=r("JPst"),o=r.n(e)()(!1);o.push([n.i,".count-actions .btn-round {\r\n\tfont-size: 1.5rem;\r\n}\r\n\r\n.counter-actions button {\r\n\t--primary: #51518e;\r\n\tborder-radius: 0.3em;\r\n}\r\n\r\n.counter-actions {\r\n\tdisplay: flex;\r\n\tjustify-content: center;\r\n\tmargin-top: 2em;\r\n}\r\n\r\n.count-actions {\r\n\tdisplay: flex;\r\n\tpadding: 1em 0;\r\n\tborder: solid 0.1em;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.count-actions::after,\r\n.count-actions::before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\twidth: 30%;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tbottom: 0;\r\n\tborder-radius: 50%;\r\n\tz-index: -1;\r\n}\r\n\r\n.count-actions::after {\r\n\tright: -15%;\r\n\tborder-right: solid;\r\n}\r\n\r\n.count-actions::before {\r\n\tleft: -15%;\r\n\tborder-left: solid;\r\n}\r\n\r\n.count-actions,\r\n.count-actions::before,\r\n.count-actions::after {\r\n\tbackground: #e82ba7;\r\n}\r\n\r\n.count-actions {\r\n\tposition: relative;\r\n}\r\n\r\n.count-actions {\r\n\tborder-left: none;\r\n\tborder-right: none;\r\n\tz-index: 100;\r\n}\r\n\r\n.counter-actions button {\r\n\tborder: solid;\r\n\tmargin: 0 1rem;\r\n\tfont-size: 1rem;\r\n}\r\n\r\n.count-actions input {\r\n\twidth: 50%;\r\n}",""]),t.a=o},5693:function(n,t,r){"use strict";var e=r("JPst"),o=r.n(e)()(!1);o.push([n.i,"#total {\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tfont-size: 2rem;\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tpadding: 0.5rem;\r\n\tcolor: grey;\r\n\tbackground: #fff;\r\n\tbox-shadow: inset -0.5rem -1rem 0.95rem -1rem;\r\n\tz-index: 100;\r\n}\r\n\r\n.message-box {\r\n\tmargin-left: 15%;\r\n}\r\n\r\n.msg {\r\n\tfont-size: 2.5rem;\r\n\tcolor: #443e3e;\r\n}\r\n\r\n.message-box p {\r\n\tcolor: #eee;\r\n}",""]),t.a=o},D2KY:function(n,t,r){"use strict";var e=r("JPst"),o=r.n(e)()(!1);o.push([n.i,".btn {\r\n\t--primary: #000;\r\n\t--secondary: #fff;\r\n  min-height: 2em;\r\n  min-width: 2em;\r\n  border: solid 0.15rem;\r\n  color: var(--primary);\r\n  background: var(--secondary);\r\n  transition: all 0.3s;\r\n}\r\n\r\n.btn:hover,\r\n.btn:focus {\r\n  color: var(--secondary);\r\n  background: var(--primary);\r\n}\r\n.btn:focus {\r\n\tborder-style: dashed;\r\n}\r\n\r\n.btn-float {\r\n\t--primary: green;\r\n  position: fixed;\r\n  bottom: 1em;\r\n  right: 1em;\r\n  font-size: 1.5rem;\r\n  z-index: 200;\r\n}\r\n\r\n.btn-round {\r\n  border: solid 0.15em;\r\n  border-radius: 50%;\r\n}\r\n\r\n@media screen and (min-width: 900px) {\r\n  .btn-float {\r\n    font-size: 3rem;\r\n  }\r\n}",""]),t.a=o},ERIh:function(n,t,r){"use strict";r.r(t);var e=r("JqEL");r("spug");var o=r("odmM");function a(){return JSON.parse(localStorage.getItem("counters"))||{}}function i(n){localStorage.setItem("counters",JSON.stringify(n))}const[c]=document.getElementsByTagName("main"),s=function(n=document.body){const t=Object(e.a)("div",{id:"total",innerHTML:'\n<span id="score">{number}</span>\n<i> Total Counts</i>\n'});n.appendChild(t);const[r]=t.getElementsByTagName("span");return function(n){r.textContent=n||0}}(),u={currentCountersCount:0,messageDestroyFunction:null,drawerUpdateFunction:null};function d(n,t){return function(n=document.body,t){const r={title:null,count:null,time:new Date(t.dateString)},e=document.createElement("article");e.innerHTML='\n<header>\n\t<h3 tabindex="0">No Title</h3>\n\t<div>\n\t\t<time>12:34 pm</time>\n\t</div>\n</header>\n<div class="count-actions">\n\t<button class="btn btn-round">+</button>\n\t<input type="number" name="count" />\n\t<button class="btn btn-round">-</button>\n</div>\n<div class="counter-actions">\n\t<button class="btn">Save</button>\n\t<button class="btn">Delete</button>\n</div>';const[o,a,i,c]=e.getElementsByTagName("button"),[s]=e.getElementsByTagName("input"),[u]=e.getElementsByTagName("h3"),[d]=e.getElementsByTagName("time");function l(){e.remove()}return d.dateTime=r.time.toISOString(),d.textContent=r.time.toDateString(),n.appendChild(e),e.addEventListener("click",n=>{["INPUT","BUTTON"].includes(n.target.nodeName)||t.onCounterBoxClick(t.dataId)}),u.addEventListener("keydown",n=>{"Enter"===n.key&&t.onCounterBoxClick(t.dataId)}),o.addEventListener("click",n=>{const r=(s.valueAsNumber||0)+1;s.value=r,t.onCounterDataChange("count",r)}),a.addEventListener("click",n=>{const r=(s.valueAsNumber||0)-1;s.value=r,t.onCounterDataChange("count",r)}),c.addEventListener("click",n=>{l(),t.onDelete()}),i.addEventListener("click",n=>{t.onSave(t.dataId)}),{update:function(n="No title",e=null){r.title!==n&&(u.textContent=n,t.onCounterDataChange("title",n)),r.count!==e&&(s.valueAsNumber=e,t.onCounterDataChange("count",e))},distroy:l}}(c,{dataId:n,dateString:t,onCounterBoxClick(){const n=this.dataId;u.drawerUpdateFunction?u.drawerUpdateFunction(n):r.e(2).then(r.bind(null,"KHDO")).then(({default:t})=>{u.drawerUpdateFunction=t(document.body,{id:n,onInput(n,t,r){o.a[n][t]=r,"title"===t&&o.a[n].root.update(r)}})})},onDelete(){if(--u.currentCountersCount,s(u.currentCountersCount),l(u.currentCountersCount),o.a[this.dataId].requireCacheSync){const n=a();delete n[this.dataId],i(n)}c.firstElementChild.focus()},onCounterDataChange(n,t){o.a[this.dataId][n]=t},onSave(n){o.a[n];o.a[n].requireCacheSync=!0;const t=a(),{title:r,dateString:e,note:c,count:s}=o.a[n];t[n]={title:r,dateString:e,note:c,count:s},i(t)}})}function l(n){0===n&&r.e(3).then(r.bind(null,"LDy2")).then(({default:n})=>{u.messageDestroyFunction=n(c)})}s(u.currentCountersCount),function(n=document.body,t){const r=Object(e.a)("button",{id:"add-counter",className:"btn btn-float btn-round",textContent:"+"});n.appendChild(r),r.addEventListener("click",t),r.focus()}(c,n=>{const t=Date.now(),r=t+Math.random();0===u.currentCountersCount&&u.messageDestroyFunction&&(u.messageDestroyFunction(),u.messageDestroyFunction=null),++u.currentCountersCount,o.a[r]={root:d(r,t),dateString:t},s(u.currentCountersCount)});const f=a();for(let n in f){const{title:t,note:r,count:e,dateString:a}=f[n]||{};o.a[n]={root:d(n,a),title:t,dateString:a,note:r,count:e,requireCacheSync:!0},o.a[n].root.update(t,e),++u.currentCountersCount}l(u.currentCountersCount),s(u.currentCountersCount)},JPst:function(n,t,r){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r=function(n,t){var r=n[1]||"",e=n[3];if(!e)return r;if(t&&"function"==typeof btoa){var o=(i=e,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=e.sources.map((function(n){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(n," */")}));return[r].concat(a).concat([o]).join("\n")}var i,c,s;return[r].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(n,r,e){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(e)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);e&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},JqEL:function(n,t,r){"use strict";function e(n,t){const r=document.createElement(n||"div");return Object.keys(t).forEach(n=>{r[n]=t[n]}),r}r.d(t,"a",(function(){return e}))},LboF:function(n,t,r){"use strict";var e,o=function(){return void 0===e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e},a=function(){var n={};return function(t){if(void 0===n[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[t]=r}return n[t]}}(),i=[];function c(n){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===n){t=r;break}return t}function s(n,t){for(var r={},e=[],o=0;o<n.length;o++){var a=n[o],s=t.base?a[0]+t.base:a[0],u=r[s]||0,d="".concat(s," ").concat(u);r[s]=u+1;var l=c(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==l?(i[l].references++,i[l].updater(f)):i.push({identifier:d,updater:p(f,t),references:1}),e.push(d)}return e}function u(n){var t=document.createElement("style"),e=n.attributes||{};if(void 0===e.nonce){var o=r.nc;o&&(e.nonce=o)}if(Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),"function"==typeof n.insert)n.insert(t);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,l=(d=[],function(n,t){return d[n]=t,d.filter(Boolean).join("\n")});function f(n,t,r,e){var o=r?"":e.media?"@media ".concat(e.media," {").concat(e.css,"}"):e.css;if(n.styleSheet)n.styleSheet.cssText=l(t,o);else{var a=document.createTextNode(o),i=n.childNodes;i[t]&&n.removeChild(i[t]),i.length?n.insertBefore(a,i[t]):n.appendChild(a)}}function m(n,t,r){var e=r.css,o=r.media,a=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}var h=null,b=0;function p(n,t){var r,e,o;if(t.singleton){var a=b++;r=h||(h=u(t)),e=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=u(t),e=m.bind(null,r,t),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return e(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e(n=t)}else o()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var e=0;e<r.length;e++){var o=c(r[e]);i[o].references--}for(var a=s(n,t),u=0;u<r.length;u++){var d=c(r[u]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=a}}}},PYiw:function(n,t,r){"use strict";var e=r("JPst"),o=r.n(e)()(!1);o.push([n.i,".draw-over {\r\n\tposition: fixed;\r\n\tbottom: 0;\r\n\theight: 60vh;\r\n\tbackground: gray;\r\n\tz-index: 300;\r\n\ttransform: translateY(100vh);\r\n\ttransition: transform 0.2s;\r\n\tbox-shadow: 0 0 2rem;\r\n}\r\n\r\n.draw-over.open {\r\n\ttransform: translateY(0vh);\r\n}\r\n\r\n/*.draw-over.open.fc {\r\n\tThis is supposed to open the drawer in full screen when the drawer is dragged up\r\n\theight: 100vh;\r\n}*/\r\n\r\n#title-bar {\r\n\tcolor: #141417;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n#note {\r\n\theight: 32vh;\r\n\twidth: 80%;\r\n\tfont-size: 1.4rem;\r\n\tword-spacing: 5px;\r\n\tline-height: 1.35;\r\n\toverflow: auto;\r\n\tpadding-right: 5%;\r\n}\r\n\r\n#title-bar h1,\r\n#note {\r\n\tmargin-left: 10%;\r\n}\r\n\r\n#title-bar button {\r\n\talign-self: center;\r\n\tfont-size: 1.5rem;\r\n\tmargin-right: 2rem;\r\n}\r\n\r\n#title-bar h1 {\r\n\tfont-size: 2.6rem;\r\n}",""]),t.a=o},odmM:function(n,t,r){"use strict";t.a={}},spug:function(n,t,r){var e=r("LboF"),o=r("+q4Q");"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};e(o,a);n.exports=o.locals||{}}},[["ERIh",1]],[3]]);