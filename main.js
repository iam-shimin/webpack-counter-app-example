/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/button.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/button.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".btn {\\r\\n\\t--primary: #000;\\r\\n\\t--secondary: #fff;\\r\\n  min-height: 2em;\\r\\n  min-width: 2em;\\r\\n  border: solid 0.15rem;\\r\\n  color: var(--primary);\\r\\n  background: var(--secondary);\\r\\n  transition: all 0.3s;\\r\\n}\\r\\n\\r\\n.btn:hover,\\r\\n.btn:focus {\\r\\n  color: var(--secondary);\\r\\n  background: var(--primary);\\r\\n}\\r\\n.btn:focus {\\r\\n\\tborder-style: dashed;\\r\\n}\\r\\n\\r\\n.btn-float {\\r\\n\\t--primary: green;\\r\\n  position: fixed;\\r\\n  bottom: 5rem;\\r\\n  right: 5rem;\\r\\n  font-size: 3rem;\\r\\n  z-index: 200;\\r\\n}\\r\\n\\r\\n.btn-round {\\r\\n  border: solid 0.15em;\\r\\n  border-radius: 50%;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style/button.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/counter.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/counter.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".count-actions .btn-round {\\r\\n\\tfont-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.counter-actions button {\\r\\n\\t--primary: #51518e;\\r\\n\\tborder-radius: 0.3em;\\r\\n}\\r\\n\\r\\n.counter-actions {\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: center;\\r\\n\\tmargin-top: 2em;\\r\\n}\\r\\n\\r\\n.count-actions {\\r\\n\\tdisplay: flex;\\r\\n\\tpadding: 1em 0;\\r\\n\\tborder: solid 0.1em;\\r\\n}\\r\\n\\r\\n.count-actions::after,\\r\\n.count-actions::before {\\r\\n\\tcontent: '';\\r\\n\\tdisplay: block;\\r\\n\\twidth: 30%;\\r\\n\\tposition: absolute;\\r\\n\\ttop: 0;\\r\\n\\tbottom: 0;\\r\\n\\tborder-radius: 50%;\\r\\n\\tz-index: -1;\\r\\n}\\r\\n\\r\\n.count-actions::after {\\r\\n\\tright: -3em;\\r\\n\\tborder-right: solid;\\r\\n}\\r\\n\\r\\n.count-actions::before {\\r\\n\\tleft: -3em;\\r\\n\\tborder-left: solid;\\r\\n}\\r\\n\\r\\n.count-actions,\\r\\n.count-actions::before,\\r\\n.count-actions::after {\\r\\n\\tbackground: #e82ba7;\\r\\n}\\r\\n\\r\\n.count-actions {\\r\\n\\tposition: relative;\\r\\n}\\r\\n\\r\\n.count-actions {\\r\\n\\tborder-left: none;\\r\\n\\tborder-right: none;\\r\\n\\tz-index: 100;\\r\\n}\\r\\n\\r\\n.counter-actions button {\\r\\n\\tborder: solid;\\r\\n\\tmargin: 0 1rem;\\r\\n\\tfont-size: 1rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style/counter.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/drawer.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/drawer.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".draw-over {\\r\\n\\tposition: fixed;\\r\\n\\ttop: 0;\\r\\n\\tbottom: 0;\\r\\n\\tleft: 0;\\r\\n\\tright: 0;\\r\\n\\tbackground: gray;\\r\\n\\tz-index: 300;\\r\\n\\ttransform: translateY(100%);\\r\\n\\ttransition: transform 0.2s;\\r\\n\\tbox-shadow: 0 0 2rem;\\r\\n}\\r\\n\\r\\n.draw-over.open {\\r\\n\\ttransform: translateY(50%);\\r\\n}\\r\\n\\r\\n#title-bar {\\r\\n\\tcolor: #141417;\\r\\n\\tdisplay: flex;\\r\\n\\tjustify-content: space-between;\\r\\n}\\r\\n\\r\\n#note {\\r\\n\\twidth: 80%;\\r\\n\\tfont-size: 1.4rem;\\r\\n\\tword-spacing: 5px;\\r\\n\\tline-height: 1.35;\\r\\n}\\r\\n\\r\\n#title-bar h1,\\r\\n#note {\\r\\n\\tmargin-left: 10%;\\r\\n}\\r\\n\\r\\n#title-bar button {\\r\\n\\talign-self: center;\\r\\n\\tfont-size: 1.5rem;\\r\\n\\tmargin-right: 2rem;\\r\\n}\\r\\n\\r\\n#title-bar h1 {\\r\\n\\tfont-size: 2.6rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style/drawer.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/index.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/index.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./button.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/button.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_counter_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./counter.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/counter.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_drawer_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./drawer.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/drawer.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./message.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/message.css\");\n// Imports\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_counter_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_drawer_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_message_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\r\\n\\tmargin: 0;\\r\\n\\twidth: 100vw;\\r\\n}\\r\\n\\r\\nhtml, body, main {\\r\\n\\theight: 100%;\\r\\n}\\r\\n\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0 3rem;\\r\\n  overflow-x: auto;\\r\\n  background: #6cac08;\\r\\n}\\r\\n\\r\\n\\r\\narticle {\\r\\n  border: solid 0.2em;\\r\\n  margin: 0.5em;\\r\\n  padding: 2em 3em;\\r\\n  border-radius: 0.4em;\\r\\n\\tbox-shadow: 0 0 0.5em;\\r\\n\\ttransition: transform 0.3s cubic-bezier(.77,0,.18,1);\\r\\n\\ttransform: scale(0.9)\\r\\n}\\r\\n\\r\\narticle:hover,\\r\\narticle:focus-within {\\r\\n\\ttransform: scale(1);\\r\\n\\tbox-shadow: 1em 1em 3em;\\r\\n}\\r\\n\\r\\narticle header {\\r\\n  padding-bottom: 1em;\\r\\n}\\r\\n\\r\\narticle {\\r\\n  background: #1e241e;\\r\\n}\\r\\n\\r\\nheader h3 {\\r\\n  color: #fff;\\r\\n  width: 18rem;\\r\\n  white-space: nowrap;\\r\\n  overflow: hidden;\\r\\n  text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  color: #aaa;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  background: #bb95ae;\\r\\n  border: solid;\\r\\n  margin: 0 0.5em;\\r\\n  font-size: 1rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/message.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/message.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#total {\\r\\n\\tposition: fixed;\\r\\n\\ttop: 0;\\r\\n\\tfont-size: 2rem;\\r\\n\\ttext-align: center;\\r\\n\\twidth: 100%;\\r\\n\\tpadding: 0.5rem;\\r\\n\\tcolor: grey;\\r\\n\\tbackground: #fff;\\r\\n\\tbox-shadow: inset -0.5rem -1rem 0.95rem -1rem\\r\\n}\\r\\n\\r\\n.message-box {\\r\\n\\tmargin-left: 15%;\\r\\n}\\r\\n\\r\\n.msg,\\r\\n.message-box p {\\r\\n\\twidth: max-content;\\r\\n}\\r\\n\\r\\n.msg {\\r\\n\\tfont-size: 2.5rem;\\r\\n\\tcolor: #443e3e;\\r\\n}\\r\\n\\r\\n.message-box p {\\r\\n\\tcolor: #eee;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style/message.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var components_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/counter */ \"./src/components/counter.js\");\n/* harmony import */ var components_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/drawer */ \"./src/components/drawer.js\");\n/* harmony import */ var components_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/message */ \"./src/components/message.js\");\n/* harmony import */ var components_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/score */ \"./src/components/score.js\");\n/* harmony import */ var style_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! style/index.css */ \"./src/style/index.css\");\n/* harmony import */ var style_index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(style_index_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! storage */ \"./src/storage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst [app] = document.getElementsByTagName('main');\r\nconst scoreUpdateFunction = Object(components_score__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\nconst addCounterButton = document.getElementById('add-counter');\r\n\r\n// state\r\nconst state = {\r\n\tcurrentCountersCount: 0,\r\n\tmessageDestroyFunction: null,\r\n\tdrawerUpdateFunction: null\r\n}\r\n\r\nscoreUpdateFunction(state.currentCountersCount);\r\n\r\naddCounterButton.addEventListener('click', event => {\r\n\tconst id = Date.now() + Math.random();\r\n\tif (state.currentCountersCount === 0 && state.messageDestroyFunction) {\r\n\t\tstate.messageDestroyFunction();\r\n\t\tstate.messageDestroyFunction = null;\r\n\t}\r\n\r\n\t++state.currentCountersCount;\r\n\r\n\tstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][id] = {root: counterWithActions(id)};\r\n\tscoreUpdateFunction(state.currentCountersCount);\r\n})\r\n\r\nfunction counterWithActions(id) {\r\n\treturn Object(components_counter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(app, {\r\n\t\tdataId: id,\r\n\t\tonCounterBoxClick() {\r\n\t\t\tconst dataId = this.dataId;\r\n\t\t\tif (state.drawerUpdateFunction) {\r\n\t\t\t\tstate.drawerUpdateFunction(dataId);\r\n\t\t\t} else {\r\n\t\t\t\tstate.drawerUpdateFunction = Object(components_drawer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.body, {\r\n\t\t\t\t\tid: dataId,\r\n\t\t\t\t\tonInput(id, name, value) {\r\n\t\t\t\t\t\tstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][id][name] = value;\r\n\t\t\t\t\t\tif (name === 'title') {\r\n\t\t\t\t\t\t\tstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][id].root.update(value);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t},\r\n\t\tonDelete() {\r\n\t\t\t// check count, update score, show/hide message,\r\n\t\t\t--state.currentCountersCount;\r\n\t\t\tscoreUpdateFunction(state.currentCountersCount);\r\n\t\t\tshowMessage(state.currentCountersCount);\r\n\t\t\tif (storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][this.dataId].requireCacheSync) {\r\n\t\t\t\tconst savedDataLocal = Object(storage__WEBPACK_IMPORTED_MODULE_5__[\"getSavedData\"])();\r\n\t\t\t\tdelete savedDataLocal[this.dataId];\r\n\t\t\t\tObject(storage__WEBPACK_IMPORTED_MODULE_5__[\"setSavedData\"])(savedDataLocal);\r\n\t\t\t}\r\n\t\t},\r\n\t\tonCounterDataChange(name, value) {\r\n\t\t\tstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][this.dataId][name] = value;\r\n\t\t},\r\n\t\tonSave(id) {\r\n\t\t\tconst item = storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][id];\r\n\t\t\tstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][id].requireCacheSync = true;\r\n\t\t\tconst savedData = Object(storage__WEBPACK_IMPORTED_MODULE_5__[\"getSavedData\"])();\r\n\t\t\tconst {title, note, count} = storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][id];\r\n\t\t\tsavedData[id] = {title, note, count};\r\n\t\t\tObject(storage__WEBPACK_IMPORTED_MODULE_5__[\"setSavedData\"])(savedData);\r\n\t\t}\r\n\t});\r\n}\r\n\r\nfunction showMessage(currentCountersCount) {\r\n\tif (currentCountersCount === 0) {\r\n\t\t// show message\r\n\t\t// const message = import('./messageComponent').then(module => {\r\n\t\t// \tmessageDestroyFunction.value = module.default(app);\r\n\t\t// });\r\n\t\tstate.messageDestroyFunction = Object(components_message__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\r\n\t}\r\n}\r\n\r\nconst savedData = Object(storage__WEBPACK_IMPORTED_MODULE_5__[\"getSavedData\"])();\r\n\r\nfor (let cId in savedData) {\r\n\tconst {title, note, count} = savedData[cId] || {};\r\n\tstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][cId] = {\r\n\t\troot: counterWithActions(cId),\r\n\t\ttitle,\r\n\t\tnote,\r\n\t\tcount,\r\n\t\trequireCacheSync: true\r\n\t};\r\n\tstorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"][cId].root.update(title, count);\r\n\t++state.currentCountersCount;\r\n}\r\n\r\nshowMessage(state.currentCountersCount);\r\nscoreUpdateFunction(state.currentCountersCount);\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/counter.js":
/*!***********************************!*\
  !*** ./src/components/counter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return create; });\nconst counterContent = `\r\n<header>\r\n\t<h3>No Title</h3>\r\n\t<div>\r\n\t\t<time>12:34 pm</time>\r\n\t</div>\r\n</header>\r\n<div class=\"count-actions\">\r\n\t<button class=\"btn btn-round\">+</button>\r\n\t<input type=\"number\" name=\"count\" />\r\n\t<button class=\"btn btn-round\">-</button>\r\n</div>\r\n<div class=\"counter-actions\">\r\n\t<button class=\"btn\">Save</button>\r\n\t<button class=\"btn\">Delete</button>\r\n</div>`;\r\n\r\n// export default \r\nfunction create(parent = document.body, props) {\r\n\tconst state = {\r\n\t\ttitle: null,\r\n\t\tcount: null\r\n\t};\r\n\r\n\tconst node = document.createElement('article');\r\n\tnode.innerHTML = counterContent;\r\n\r\n\tconst [plusButton, minusButton, saveButton, deleteButton] = node.getElementsByTagName('button');\r\n\tconst [input] = node.getElementsByTagName('input');\r\n\tconst [titleNode] = node.getElementsByTagName('h3');\r\n\tparent.appendChild(node);\r\n\r\n\tnode.addEventListener('click', event => {\r\n\t\tif (event.target.tabIndex < 0) {\r\n\t\t\tprops.onCounterBoxClick(props.dataId);\r\n\t\t}\r\n\t});\r\n\r\n\tplusButton.addEventListener('click', event => {\r\n\t\tconst sum = (input.valueAsNumber || 0)  + 1;\r\n\t\tinput.value = sum;\r\n\t\tprops.onCounterDataChange('count', sum);\r\n\t})\r\n\r\n\tminusButton.addEventListener('click', event => {\r\n\t\tconst diff = (input.valueAsNumber || 0) - 1;\r\n\t\tinput.value = diff;\r\n\t\tprops.onCounterDataChange('count', diff);\r\n\t})\r\n\r\n\tdeleteButton.addEventListener('click', event => {\r\n\t\tdistroy();\r\n\t\tprops.onDelete(); // check count, update score, show/hide message,\r\n\t\t// if (noOfArticles === 0) {\r\n\t\t\t// const msg = document.createElement('span');\r\n\t\t\t// msg.className = 'msg';\r\n\t\t\t// msg.textContent = 'No active counters exist';\r\n\t\t\t// main.appendChild(msg);\r\n\t\t// }\r\n\t})\r\n\r\n\tsaveButton.addEventListener('click', event => {\r\n\t\tprops.onSave(props.dataId);\r\n\t})\r\n\r\n\t// LIFECYCLE\r\n\r\n\tfunction update(title = 'No title', count = null) {\r\n\t\tif (state.title !== title) {\r\n\t\t\ttitleNode.textContent = title;\r\n\t\t\tprops.onCounterDataChange('title', title);\r\n\t\t}\r\n\r\n\t\tif (state.count !== count) {\r\n\t\t\tinput.valueAsNumber = count;\r\n\t\t\tprops.onCounterDataChange('count', count);\r\n\t\t}\r\n\t}\r\n\r\n\tfunction distroy() {\r\n\t\tnode.remove();\r\n\t}\r\n\r\n\treturn {update, distroy}\r\n}\n\n//# sourceURL=webpack:///./src/components/counter.js?");

/***/ }),

/***/ "./src/components/drawer.js":
/*!**********************************!*\
  !*** ./src/components/drawer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return create; });\n/* harmony import */ var storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! storage */ \"./src/storage.js\");\n\r\n\r\nconst drawerContents = `\r\n<header id=\"title-bar\">\r\n\t<h1 contenteditable=\"true\">{title}</h1>\r\n\t<button class=\"btn\" style=\"border: solid 0.15em\">X</button>\r\n</header>\r\n<p id=\"note\" contenteditable=\"true\">{note}</p>`;\r\n\r\nfunction create(parent = document.body, props) {\r\n\tconst state = {\r\n\t\tisOpen: false,\r\n\t\tcurrentId: null\r\n\t};\r\n\r\n\tconst node = document.createElement('section');\r\n\tnode.id = \"drawer\";\r\n\tnode.className = \"draw-over\";\r\n\tnode.innerHTML = drawerContents;\r\n\tparent.appendChild(node);\r\n\r\n\tconst [title] = node.getElementsByTagName('h1');\r\n\tconst [note] = node.getElementsByTagName('p');\r\n\tconst [closeButton] = node.getElementsByTagName('button');\r\n\r\n\tcloseButton.addEventListener('click', event => {\r\n\t\tupdate(state.currentId);\r\n\t});\r\n\r\n\ttitle.addEventListener('input', event => {\r\n\t\tprops.onInput(state.currentId, 'title', event.currentTarget.textContent);\r\n\t})\r\n\r\n\tnote.addEventListener('input', event => {\r\n\t\tprops.onInput(state.currentId, 'note', event.currentTarget.textContent);\r\n\t})\r\n\r\n\tfunction update(id) {\r\n\t\tconst isToggleStateAction = id === state.currentId;\r\n\t\tconst isDrawerOpenAction = id !== state.currentId && !state.isOpen;\r\n\t\tif (isToggleStateAction || isDrawerOpenAction) {\r\n\t\t\trequestAnimationFrame(() => {\r\n\t\t\t\trequestAnimationFrame(toggleDrawer);\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tif (isToggleStateAction) return;\r\n\r\n\t\tconst titleText = (storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id] && storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].title) || 'No title';\r\n\t\tconst noteText = (storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id] && storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"][id].note) || 'No note';\r\n\t\ttitle.textContent = titleText;\r\n\t\tnote.textContent = noteText;\r\n\t\tstate.currentId = id;\r\n\t}\r\n\r\n\tupdate(props.id);\r\n\r\n\tfunction toggleDrawer() {\r\n\t\tdrawer.classList.toggle('open');\r\n\t\tstate.isOpen = !state.isOpen;\r\n\t}\r\n\r\n\treturn update;\r\n}\n\n//# sourceURL=webpack:///./src/components/drawer.js?");

/***/ }),

/***/ "./src/components/message.js":
/*!***********************************!*\
  !*** ./src/components/message.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return create; });\nlet initTitle = 'No active counters exist';\r\nlet initMessage = 'Add counters by clicking on the (+) button.';\r\n\r\nconst content = `\r\n<h2 class=\"msg\">${initTitle}</h2>\r\n<p>${initMessage}</p>`;\r\n\r\nfunction create(parent = document.body) {\r\n\tconst node = document.createElement('div');\r\n\tnode.className = 'message-box';\r\n\tnode.innerHTML = content;\r\n\tparent.appendChild(node);\r\n\r\n\t// function update(title, message) {\r\n\t// \tif (title !== initTitle) {\r\n\t// \t\tconst [titleDOM] = document.getElementsByTagName('h2');\r\n\t// \t\ttitleDOM.textContent = title;\r\n\t// \t\tinitTitle = title;\r\n\t// \t}\r\n\r\n\t// \tif (message !== initTitle) {\r\n\t// \t\tconst [messageDOM] = document.getElementsByTagName('p');\r\n\t// \t\tmessageDOM.textContent = message;\r\n\t// \t\tinitMessage = message;\r\n\t// \t}\r\n\t// }\r\n\r\n\tfunction destroy() {\r\n\t\tnode.remove();\r\n\t}\r\n\r\n\treturn destroy;\r\n}\n\n//# sourceURL=webpack:///./src/components/message.js?");

/***/ }),

/***/ "./src/components/score.js":
/*!*********************************!*\
  !*** ./src/components/score.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return create; });\nconst content = `\r\n<span id=\"score\">{number}</span>\r\n<i> Total Counts</i>\r\n`\r\n\r\nfunction create(parent = document.body) {\r\n\tconst node = document.createElement('div');\r\n\tnode.id = 'total';\r\n\tnode.innerHTML = content;\r\n\tparent.appendChild(node);\r\n\r\n\tconst [score] = node.getElementsByTagName('span');\r\n\r\n\tfunction update(total) {\r\n\t\tscore.textContent = total || 0;\r\n\t}\r\n\r\n\treturn update;\r\n}\n\n//# sourceURL=webpack:///./src/components/score.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: getSavedData, setSavedData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSavedData\", function() { return getSavedData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setSavedData\", function() { return setSavedData; });\nconst KEY = 'counters';\r\n\r\nconst data = {/*id: {title, note, count, root, requireCacheSync}*/};\r\n\r\nfunction getSavedData() {\r\n\treturn JSON.parse(localStorage.getItem(KEY)) || {};\r\n}\r\n\r\nfunction setSavedData(data) {\r\n\tlocalStorage.setItem(KEY, JSON.stringify(data));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ }),

/***/ "./src/style/index.css":
/*!*****************************!*\
  !*** ./src/style/index.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style/index.css?");

/***/ })

/******/ });