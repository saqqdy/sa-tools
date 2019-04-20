(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/client */ \"./src/modules/client.js\");\n/* harmony import */ var _modules_pattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pattern */ \"./src/modules/pattern.js\");\n/* harmony import */ var _modules_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/trim */ \"./src/modules/trim.js\");\n/* harmony import */ var _modules_clearAttr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/clearAttr */ \"./src/modules/clearAttr.js\");\n/* harmony import */ var _modules_clearBr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/clearBr */ \"./src/modules/clearBr.js\");\n/* harmony import */ var _modules_clearHtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/clearHtml */ \"./src/modules/clearHtml.js\");\n/* harmony import */ var _modules_clearHtmlExpSN__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clearHtmlExpSN */ \"./src/modules/clearHtmlExpSN.js\");\n/* harmony import */ var _modules_clearHtmlN__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/clearHtmlN */ \"./src/modules/clearHtmlN.js\");\n/* harmony import */ var _modules_clearHtmlNS__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/clearHtmlNS */ \"./src/modules/clearHtmlNS.js\");\n/* harmony import */ var _modules_clearHtmlTag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/clearHtmlTag */ \"./src/modules/clearHtmlTag.js\");\n/* harmony import */ var _modules_getNumber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/getNumber */ \"./src/modules/getNumber.js\");\n/* harmony import */ var _modules_imgAdapt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/imgAdapt */ \"./src/modules/imgAdapt.js\");\n/* harmony import */ var _modules_imgChoose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/imgChoose */ \"./src/modules/imgChoose.js\");\n/* harmony import */ var _modules_getRandomNum__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/getRandomNum */ \"./src/modules/getRandomNum.js\");\n/* harmony import */ var _modules_getRandomStr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/getRandomStr */ \"./src/modules/getRandomStr.js\");\n/* harmony import */ var _modules_getRandomStrWidthSpecialChar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/getRandomStrWidthSpecialChar */ \"./src/modules/getRandomStrWidthSpecialChar.js\");\n/* harmony import */ var _modules_getCHSLength__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/getCHSLength */ \"./src/modules/getCHSLength.js\");\n/* harmony import */ var _modules_cutCHSString__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/cutCHSString */ \"./src/modules/cutCHSString.js\");\n/* harmony import */ var _modules_textareaInsertText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/textareaInsertText */ \"./src/modules/textareaInsertText.js\");\n/* harmony import */ var _modules_textareaMoveToEnd__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/textareaMoveToEnd */ \"./src/modules/textareaMoveToEnd.js\");\n/* harmony import */ var _modules_isDigitals__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/isDigitals */ \"./src/modules/isDigitals.js\");\n/* harmony import */ var _modules_isExitsFunction__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/isExitsFunction */ \"./src/modules/isExitsFunction.js\");\n/* harmony import */ var _modules_isExitsVariable__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/isExitsVariable */ \"./src/modules/isExitsVariable.js\");\n/* harmony import */ var _modules_getWindowSize__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/getWindowSize */ \"./src/modules/getWindowSize.js\");\n/* harmony import */ var _modules_getAppVersion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/getAppVersion */ \"./src/modules/getAppVersion.js\");\n/* harmony import */ var _modules_getOsVersion__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modules/getOsVersion */ \"./src/modules/getOsVersion.js\");\n/* harmony import */ var _modules_getIsAppVersionLastest__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/getIsAppVersionLastest */ \"./src/modules/getIsAppVersionLastest.js\");\n/* harmony import */ var _modules_getDirParam__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/getDirParam */ \"./src/modules/getDirParam.js\");\n/* harmony import */ var _modules_getParameter__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modules/getParameter */ \"./src/modules/getParameter.js\");\n/* harmony import */ var _modules_getFileType__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/getFileType */ \"./src/modules/getFileType.js\");\n/* harmony import */ var _modules_getUrlParam__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/getUrlParam */ \"./src/modules/getUrlParam.js\");\n/* harmony import */ var _modules_formatTime__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/formatTime */ \"./src/modules/formatTime.js\");\n/* harmony import */ var _modules_formatTimeStr__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modules/formatTimeStr */ \"./src/modules/formatTimeStr.js\");\n/* harmony import */ var _modules_setCookie__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./modules/setCookie */ \"./src/modules/setCookie.js\");\n/* harmony import */ var _modules_setLocal__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./modules/setLocal */ \"./src/modules/setLocal.js\");\n/* harmony import */ var _modules_setSession__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./modules/setSession */ \"./src/modules/setSession.js\");\n/* harmony import */ var _modules_getCookie__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./modules/getCookie */ \"./src/modules/getCookie.js\");\n/* harmony import */ var _modules_getLocal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/getLocal */ \"./src/modules/getLocal.js\");\n/* harmony import */ var _modules_getSession__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/getSession */ \"./src/modules/getSession.js\");\n/* harmony import */ var _modules_delCookie__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/delCookie */ \"./src/modules/delCookie.js\");\n/* harmony import */ var _modules_delLocal__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/delLocal */ \"./src/modules/delLocal.js\");\n/* harmony import */ var _modules_delSession__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./modules/delSession */ \"./src/modules/delSession.js\");\n/* harmony import */ var _modules_encodeBase64__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./modules/encodeBase64 */ \"./src/modules/encodeBase64.js\");\n/* harmony import */ var _modules_encodeUtf8__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./modules/encodeUtf8 */ \"./src/modules/encodeUtf8.js\");\n/* harmony import */ var _modules_decodeBase64__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./modules/decodeBase64 */ \"./src/modules/decodeBase64.js\");\n/* harmony import */ var _modules_decodeUtf8__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./modules/decodeUtf8 */ \"./src/modules/decodeUtf8.js\");\n/* harmony import */ var _modules_enWxJumpLink__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./modules/enWxJumpLink */ \"./src/modules/enWxJumpLink.js\");\n/* harmony import */ var _modules_enWxJumpLinkOld__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./modules/enWxJumpLinkOld */ \"./src/modules/enWxJumpLinkOld.js\");\n/* harmony import */ var _modules_deWxJumpLink__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./modules/deWxJumpLink */ \"./src/modules/deWxJumpLink.js\");\n/* harmony import */ var _modules_deWxJumpLinkOld__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./modules/deWxJumpLinkOld */ \"./src/modules/deWxJumpLinkOld.js\");\n/* harmony import */ var _modules_debounce__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./modules/debounce */ \"./src/modules/debounce.js\");\n/* harmony import */ var _modules_throttle__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./modules/throttle */ \"./src/modules/throttle.js\");\n/* harmony import */ var _modules_stopBubble__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./modules/stopBubble */ \"./src/modules/stopBubble.js\");\n/* harmony import */ var _modules_stopDefault__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./modules/stopDefault */ \"./src/modules/stopDefault.js\");\n/* harmony import */ var _modules_addEvent__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./modules/addEvent */ \"./src/modules/addEvent.js\");\n/* harmony import */ var _modules_removeEvent__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./modules/removeEvent */ \"./src/modules/removeEvent.js\");\n/* harmony import */ var _modules_getScrollPosition__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./modules/getScrollPosition */ \"./src/modules/getScrollPosition.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  client: Object(_modules_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n  pattern: Object(_modules_pattern__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(),\n  trim: _modules_trim__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  clearAttr: _modules_clearAttr__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  clearBr: _modules_clearBr__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  clearHtml: _modules_clearHtml__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  clearHtmlExpSN: _modules_clearHtmlExpSN__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  clearHtmlN: _modules_clearHtmlN__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  clearHtmlNS: _modules_clearHtmlNS__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  clearHtmlTag: _modules_clearHtmlTag__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n  getNumber: _modules_getNumber__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  imgAdapt: _modules_imgAdapt__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  imgChoose: _modules_imgChoose__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n  getRandomNum: _modules_getRandomNum__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  getRandomStr: _modules_getRandomStr__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n  getRandomStrWidthSpecialChar: _modules_getRandomStrWidthSpecialChar__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n  getCHSLength: _modules_getCHSLength__WEBPACK_IMPORTED_MODULE_16__[\"default\"],\n  cutCHSString: _modules_cutCHSString__WEBPACK_IMPORTED_MODULE_17__[\"default\"],\n  textareaInsertText: _modules_textareaInsertText__WEBPACK_IMPORTED_MODULE_18__[\"default\"],\n  textareaMoveToEnd: _modules_textareaMoveToEnd__WEBPACK_IMPORTED_MODULE_19__[\"default\"],\n  isDigitals: _modules_isDigitals__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n  isExitsFunction: _modules_isExitsFunction__WEBPACK_IMPORTED_MODULE_21__[\"default\"],\n  isExitsVariable: _modules_isExitsVariable__WEBPACK_IMPORTED_MODULE_22__[\"default\"],\n  getWindowSize: _modules_getWindowSize__WEBPACK_IMPORTED_MODULE_23__[\"default\"],\n  getAppVersion: _modules_getAppVersion__WEBPACK_IMPORTED_MODULE_24__[\"default\"],\n  getOsVersion: _modules_getOsVersion__WEBPACK_IMPORTED_MODULE_25__[\"default\"],\n  getIsAppVersionLastest: _modules_getIsAppVersionLastest__WEBPACK_IMPORTED_MODULE_26__[\"default\"],\n  getDirParam: _modules_getDirParam__WEBPACK_IMPORTED_MODULE_27__[\"default\"],\n  getParameter: _modules_getParameter__WEBPACK_IMPORTED_MODULE_28__[\"default\"],\n  getFileType: _modules_getFileType__WEBPACK_IMPORTED_MODULE_29__[\"default\"],\n  getUrlParam: _modules_getUrlParam__WEBPACK_IMPORTED_MODULE_30__[\"default\"],\n  formatTime: _modules_formatTime__WEBPACK_IMPORTED_MODULE_31__[\"default\"],\n  formatTimeStr: _modules_formatTimeStr__WEBPACK_IMPORTED_MODULE_32__[\"default\"],\n  setCookie: _modules_setCookie__WEBPACK_IMPORTED_MODULE_33__[\"default\"],\n  setLocal: _modules_setLocal__WEBPACK_IMPORTED_MODULE_34__[\"default\"],\n  setSession: _modules_setSession__WEBPACK_IMPORTED_MODULE_35__[\"default\"],\n  getCookie: _modules_getCookie__WEBPACK_IMPORTED_MODULE_36__[\"default\"],\n  getLocal: _modules_getLocal__WEBPACK_IMPORTED_MODULE_37__[\"default\"],\n  getSession: _modules_getSession__WEBPACK_IMPORTED_MODULE_38__[\"default\"],\n  delCookie: _modules_delCookie__WEBPACK_IMPORTED_MODULE_39__[\"default\"],\n  delLocal: _modules_delLocal__WEBPACK_IMPORTED_MODULE_40__[\"default\"],\n  delSession: _modules_delSession__WEBPACK_IMPORTED_MODULE_41__[\"default\"],\n  encodeBase64: _modules_encodeBase64__WEBPACK_IMPORTED_MODULE_42__[\"default\"],\n  encodeUtf8: _modules_encodeUtf8__WEBPACK_IMPORTED_MODULE_43__[\"default\"],\n  decodeBase64: _modules_decodeBase64__WEBPACK_IMPORTED_MODULE_44__[\"default\"],\n  decodeUtf8: _modules_decodeUtf8__WEBPACK_IMPORTED_MODULE_45__[\"default\"],\n  enWxJumpLink: _modules_enWxJumpLink__WEBPACK_IMPORTED_MODULE_46__[\"default\"],\n  enWxJumpLinkOld: _modules_enWxJumpLinkOld__WEBPACK_IMPORTED_MODULE_47__[\"default\"],\n  deWxJumpLink: _modules_deWxJumpLink__WEBPACK_IMPORTED_MODULE_48__[\"default\"],\n  deWxJumpLinkOld: _modules_deWxJumpLinkOld__WEBPACK_IMPORTED_MODULE_49__[\"default\"],\n  debounce: _modules_debounce__WEBPACK_IMPORTED_MODULE_50__[\"default\"],\n  throttle: _modules_throttle__WEBPACK_IMPORTED_MODULE_51__[\"default\"],\n  stopBubble: _modules_stopBubble__WEBPACK_IMPORTED_MODULE_52__[\"default\"],\n  stopDefault: _modules_stopDefault__WEBPACK_IMPORTED_MODULE_53__[\"default\"],\n  addEvent: _modules_addEvent__WEBPACK_IMPORTED_MODULE_54__[\"default\"],\n  removeEvent: _modules_removeEvent__WEBPACK_IMPORTED_MODULE_55__[\"default\"],\n  getScrollPosition: _modules_getScrollPosition__WEBPACK_IMPORTED_MODULE_56__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/addEvent.js":
/*!*********************************!*\
  !*** ./src/modules/addEvent.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar addEvent = function addEvent(element, type, handler) {\n  if (element.addEventListener) {\n    element.addEventListener(type, handler, false);\n  } else {\n    if (!handler.$$guid) handler.$$guid = addEvent.guid++;\n    if (!element.events) element.events = {};\n    var handlers = element.events[type];\n\n    if (!handlers) {\n      handlers = element.events[type] = {};\n\n      if (element['on' + type]) {\n        handlers[0] = element['on' + type];\n      }\n    }\n\n    handlers[handler.$$guid] = handler;\n    element['on' + type] = handleEvent;\n  }\n};\n\naddEvent.guid = 1;\n\nfunction handleEvent(event) {\n  var returnValue = true;\n  event = event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);\n  var handlers = this.events[event.type];\n\n  for (var i in handlers) {\n    this.$$handleEvent = handlers[i];\n\n    if (this.$$handleEvent(event) === false) {\n      returnValue = false;\n    }\n  }\n\n  return returnValue;\n}\n\nfunction fixEvent(event) {\n  event.preventDefault = fixEvent.preventDefault;\n  event.stopPropagation = fixEvent.stopPropagation;\n  return event;\n}\n\nfixEvent.preventDefault = function () {\n  this.returnValue = false;\n};\n\nfixEvent.stopPropagation = function () {\n  this.cancelBubble = true;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addEvent);\n\n//# sourceURL=webpack:///./src/modules/addEvent.js?");

/***/ }),

/***/ "./src/modules/clearAttr.js":
/*!**********************************!*\
  !*** ./src/modules/clearAttr.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar clearAttr = function clearAttr(string) {\n  return string.replace(/<([a-zA-Z1-7]+)\\s*[^><]*>/g, '<$1>');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearAttr);\n\n//# sourceURL=webpack:///./src/modules/clearAttr.js?");

/***/ }),

/***/ "./src/modules/clearBr.js":
/*!********************************!*\
  !*** ./src/modules/clearBr.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar clearBr = function clearBr(string) {\n  return string.replace(/<\\/br>/g, '').replace(/<br>/g, '').replace(/[\\r\\n]/g, '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearBr);\n\n//# sourceURL=webpack:///./src/modules/clearBr.js?");

/***/ }),

/***/ "./src/modules/clearHtml.js":
/*!**********************************!*\
  !*** ./src/modules/clearHtml.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar clearHtml = function clearHtml(string) {\n  return string.replace(/<\\/?.+?>/g, '').replace(/[\\r\\n]/g, '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearHtml);\n\n//# sourceURL=webpack:///./src/modules/clearHtml.js?");

/***/ }),

/***/ "./src/modules/clearHtmlExpSN.js":
/*!***************************************!*\
  !*** ./src/modules/clearHtmlExpSN.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar clearHtmlExpSN = function clearHtmlExpSN(string) {\n  return string.replace(/<\\/?[^\\/?(br)][^><]*>/gi, '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearHtmlExpSN);\n\n//# sourceURL=webpack:///./src/modules/clearHtmlExpSN.js?");

/***/ }),

/***/ "./src/modules/clearHtmlN.js":
/*!***********************************!*\
  !*** ./src/modules/clearHtmlN.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar clearHtmlN = function clearHtmlN(string) {\n  return string.replace(/<\\/?.+?>|[\\r\\n]/g, '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearHtmlN);\n\n//# sourceURL=webpack:///./src/modules/clearHtmlN.js?");

/***/ }),

/***/ "./src/modules/clearHtmlNS.js":
/*!************************************!*\
  !*** ./src/modules/clearHtmlNS.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar clearHtmlNS = function clearHtmlNS(string) {\n  return string.replace(/<\\/?.+?>|[\\r\\n\\s]|(\\ )/g, '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearHtmlNS);\n\n//# sourceURL=webpack:///./src/modules/clearHtmlNS.js?");

/***/ }),

/***/ "./src/modules/clearHtmlTag.js":
/*!*************************************!*\
  !*** ./src/modules/clearHtmlTag.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar clearHtmlTag = function clearHtmlTag(string) {\n  return string.replace(/<[^>]+>/g, '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (clearHtmlTag);\n\n//# sourceURL=webpack:///./src/modules/clearHtmlTag.js?");

/***/ }),

/***/ "./src/modules/client.js":
/*!*******************************!*\
  !*** ./src/modules/client.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar client = function client(userAgent) {\n  userAgent = userAgent || navigator.appVersion || '';\n  var userAgentL = userAgent.toLowerCase();\n  return {\n    IE: userAgentL.indexOf('msie') > -1 && !userAgentL.indexOf('opera') > -1,\n    GECKO: userAgentL.indexOf('gecko') > -1 && !userAgentL.indexOf('khtml') > -1,\n    WEBKIT: userAgentL.indexOf('applewebkit') > -1,\n    OPERA: userAgentL.indexOf('opera') > -1 && userAgentL.indexOf('presto') > -1,\n    TRIDENT: userAgentL.indexOf('trident') > -1,\n    MOBILE: !!userAgent.match(/AppleWebKit.*Mobile.*/),\n    MOBILEDEVICE: !!userAgentL.match(/iphone|android|phone|mobile|wap|netfront|x11|java|opera mobi|opera mini|ucweb|windows ce|symbian|symbianos|series|webos|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier|^lct|320x320|240x320|176x220/i),\n    IOS: !!userAgent.match(/\\(i[^;]+;( U;)? CPU.+Mac OS X/),\n    ANDROID: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1,\n    IPHONE: userAgent.indexOf('iPhone') > -1,\n    IPAD: userAgent.indexOf('iPad') > -1,\n    QQBROWSER: userAgent.indexOf('QQBrowser') > -1,\n    WEIXIN: userAgent.indexOf('MicroMessenger') > -1,\n    QQ: userAgent.match(/\\sQQ/i) === ' qq',\n    GLSH_APP: userAgent.indexOf('GeiLe_SC_H5') > -1\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);\n\n//# sourceURL=webpack:///./src/modules/client.js?");

/***/ }),

/***/ "./src/modules/cutCHSString.js":
/*!*************************************!*\
  !*** ./src/modules/cutCHSString.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction cutCHSString(str) {\n  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : str.length;\n  var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n  if (str == '' || !str) {\n    return '';\n  } else {\n    var newLength = 0;\n    var newStr = '';\n    var chineseRegex = /[^\\x00-\\xff]/g;\n    var singleChar = '';\n    var strLength = str.replace(chineseRegex, '**').length;\n\n    for (var i = 0; i < strLength; i++) {\n      singleChar = str.charAt(i).toString();\n\n      if (singleChar.match(chineseRegex) != null) {\n        newLength += 2;\n      } else {\n        newLength++;\n      }\n\n      if (newLength > len) {\n        break;\n      }\n\n      newStr += singleChar;\n    }\n\n    if (hasDot && strLength > len) {\n      newStr += '...';\n    }\n\n    return newStr;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cutCHSString);\n\n//# sourceURL=webpack:///./src/modules/cutCHSString.js?");

/***/ }),

/***/ "./src/modules/deWxJumpLink.js":
/*!*************************************!*\
  !*** ./src/modules/deWxJumpLink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar deWxJumpLink = function deWxJumpLink(string) {\n  return string.replace(/[*]{1}/g, '=').replace(/[!]{1}/g, '&').replace(/[\\(]{1}/g, '[').replace(/[\\)]{1}/g, ']');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deWxJumpLink);\n\n//# sourceURL=webpack:///./src/modules/deWxJumpLink.js?");

/***/ }),

/***/ "./src/modules/deWxJumpLinkOld.js":
/*!****************************************!*\
  !*** ./src/modules/deWxJumpLinkOld.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar deWxJumpLinkOld = function deWxJumpLinkOld(string) {\n  return string.replace(/[~]/gi, '=').replace(/[\\^]/gi, '&');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (deWxJumpLinkOld);\n\n//# sourceURL=webpack:///./src/modules/deWxJumpLinkOld.js?");

/***/ }),

/***/ "./src/modules/debounce.js":
/*!*********************************!*\
  !*** ./src/modules/debounce.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./throttle */ \"./src/modules/throttle.js\");\n\n\nvar debounce = function debounce(fn, delay, immediate) {\n  return Object(_throttle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(fn, delay, immediate, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (debounce);\n\n//# sourceURL=webpack:///./src/modules/debounce.js?");

/***/ }),

/***/ "./src/modules/decodeBase64.js":
/*!*************************************!*\
  !*** ./src/modules/decodeBase64.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nvar decodeBase64 = function decodeBase64(input) {\n  var output = '';\n  var chr1, chr2, chr3;\n  var enc1, enc2, enc3, enc4;\n  var i = 0;\n  input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, '');\n\n  while (i < input.length) {\n    enc1 = _keyStr.indexOf(input.charAt(i++));\n    enc2 = _keyStr.indexOf(input.charAt(i++));\n    enc3 = _keyStr.indexOf(input.charAt(i++));\n    enc4 = _keyStr.indexOf(input.charAt(i++));\n    chr1 = enc1 << 2 | enc2 >> 4;\n    chr2 = (enc2 & 15) << 4 | enc3 >> 2;\n    chr3 = (enc3 & 3) << 6 | enc4;\n    output = output + String.fromCharCode(chr1);\n\n    if (enc3 != 64) {\n      output = output + String.fromCharCode(chr2);\n    }\n\n    if (enc4 != 64) {\n      output = output + String.fromCharCode(chr3);\n    }\n  }\n\n  output = decodeUtf8(output);\n  return output;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (decodeBase64);\n\n//# sourceURL=webpack:///./src/modules/decodeBase64.js?");

/***/ }),

/***/ "./src/modules/decodeUtf8.js":
/*!***********************************!*\
  !*** ./src/modules/decodeUtf8.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar decodeUtf8 = function decodeUtf8(utftext) {\n  var string = '';\n  var i = 0;\n  var c = c1 = c2 = 0;\n\n  while (i < utftext.length) {\n    c = utftext.charCodeAt(i);\n\n    if (c < 128) {\n      string += String.fromCharCode(c);\n      i++;\n    } else if (c > 191 && c < 224) {\n      c2 = utftext.charCodeAt(i + 1);\n      string += String.fromCharCode((c & 31) << 6 | c2 & 63);\n      i += 2;\n    } else {\n      c2 = utftext.charCodeAt(i + 1);\n      c3 = utftext.charCodeAt(i + 2);\n      string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\n      i += 3;\n    }\n  }\n\n  return string;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (decodeUtf8);\n\n//# sourceURL=webpack:///./src/modules/decodeUtf8.js?");

/***/ }),

/***/ "./src/modules/delCookie.js":
/*!**********************************!*\
  !*** ./src/modules/delCookie.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getCookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCookie */ \"./src/modules/getCookie.js\");\n\n\nfunction delCookie(name) {\n  var e = new Date();\n  e.setTime(e.getTime() - 1);\n  var cval = Object(_getCookie__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(name);\n\n  if (cval !== null) {\n    document.cookie = name + '=' + cval + ';expires=' + e.toGMTString() + ';path=/';\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (delCookie);\n\n//# sourceURL=webpack:///./src/modules/delCookie.js?");

/***/ }),

/***/ "./src/modules/delLocal.js":
/*!*********************************!*\
  !*** ./src/modules/delLocal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction delLocal(name) {\n  localStorage.removeItem(name);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (delLocal);\n\n//# sourceURL=webpack:///./src/modules/delLocal.js?");

/***/ }),

/***/ "./src/modules/delSession.js":
/*!***********************************!*\
  !*** ./src/modules/delSession.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction delSession(name) {\n  sessionStorage.removeItem(name);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (delSession);\n\n//# sourceURL=webpack:///./src/modules/delSession.js?");

/***/ }),

/***/ "./src/modules/enWxJumpLink.js":
/*!*************************************!*\
  !*** ./src/modules/enWxJumpLink.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar enWxJumpLink = function enWxJumpLink(string) {\n  return string.replace(/[=]{1}/g, '*').replace(/[&]{1}/g, '!').replace(/[\\[]{1}/g, '(').replace(/[\\]]{1}/g, ')');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (enWxJumpLink);\n\n//# sourceURL=webpack:///./src/modules/enWxJumpLink.js?");

/***/ }),

/***/ "./src/modules/enWxJumpLinkOld.js":
/*!****************************************!*\
  !*** ./src/modules/enWxJumpLinkOld.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar enWxJumpLinkOld = function enWxJumpLinkOld(string) {\n  return string.replace(/[=]/gi, '~').replace(/[&]/gi, '^');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (enWxJumpLinkOld);\n\n//# sourceURL=webpack:///./src/modules/enWxJumpLinkOld.js?");

/***/ }),

/***/ "./src/modules/encodeBase64.js":
/*!*************************************!*\
  !*** ./src/modules/encodeBase64.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nvar encodeBase64 = function encodeBase64(input) {\n  var output = '';\n  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;\n  var i = 0;\n  input = encodeUtf8(input);\n\n  while (i < input.length) {\n    chr1 = input.charCodeAt(i++);\n    chr2 = input.charCodeAt(i++);\n    chr3 = input.charCodeAt(i++);\n    enc1 = chr1 >> 2;\n    enc2 = (chr1 & 3) << 4 | chr2 >> 4;\n    enc3 = (chr2 & 15) << 2 | chr3 >> 6;\n    enc4 = chr3 & 63;\n\n    if (isNaN(chr2)) {\n      enc3 = enc4 = 64;\n    } else if (isNaN(chr3)) {\n      enc4 = 64;\n    }\n\n    output = output + _keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4);\n  }\n\n  return output;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (encodeBase64);\n\n//# sourceURL=webpack:///./src/modules/encodeBase64.js?");

/***/ }),

/***/ "./src/modules/encodeUtf8.js":
/*!***********************************!*\
  !*** ./src/modules/encodeUtf8.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar encodeUtf8 = function encodeUtf8(string) {\n  string = string.replace(/\\r\\n/g, '\\n');\n  var utftext = '';\n\n  for (var n = 0; n < string.length; n++) {\n    var c = string.charCodeAt(n);\n\n    if (c < 128) {\n      utftext += String.fromCharCode(c);\n    } else if (c > 127 && c < 2048) {\n      utftext += String.fromCharCode(c >> 6 | 192);\n      utftext += String.fromCharCode(c & 63 | 128);\n    } else {\n      utftext += String.fromCharCode(c >> 12 | 224);\n      utftext += String.fromCharCode(c >> 6 & 63 | 128);\n      utftext += String.fromCharCode(c & 63 | 128);\n    }\n  }\n\n  return utftext;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (encodeUtf8);\n\n//# sourceURL=webpack:///./src/modules/encodeUtf8.js?");

/***/ }),

/***/ "./src/modules/formatTime.js":
/*!***********************************!*\
  !*** ./src/modules/formatTime.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar formatTime = function formatTime(time) {\n  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd';\n\n  if (typeof time === 'string') {\n    time = new Date(time);\n  }\n\n  var o = {\n    'M+': time.getMonth() + 1,\n    'd+': time.getDate(),\n    'h+': time.getHours(),\n    'm+': time.getMinutes(),\n    's+': time.getSeconds(),\n    'q+': Math.floor((time.getMonth() + 3) / 3),\n    S: time.getMilliseconds()\n  };\n  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, ('' + time.getFullYear()).substr(4 - RegExp.$1.length));\n\n  for (var k in o) {\n    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));\n  }\n\n  return fmt;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatTime);\n\n//# sourceURL=webpack:///./src/modules/formatTime.js?");

/***/ }),

/***/ "./src/modules/formatTimeStr.js":
/*!**************************************!*\
  !*** ./src/modules/formatTimeStr.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formatTime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatTime */ \"./src/modules/formatTime.js\");\n\n\nfunction formatTimeStr() {\n  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parseInt(time, 10);\n  var fmt = arguments.length > 1 ? arguments[1] : undefined;\n  var now = new Date().getTime();\n  var format = fmt != '' && fmt != null ? fmt : 'MM-dd';\n  var old = time;\n\n  if (!old || old < 1) {\n    return;\n  }\n\n  var t = now - old;\n  var newTimeStr = '';\n\n  if (t < 60 * 2) {\n    newTimeStr = '刚刚';\n  } else if (t < 60 * 60) {\n    newTimeStr = parseInt(t / 60) + \"\\u5206\\u949F\\u524D\";\n  } else if (t < 60 * 60 * 24) {\n    newTimeStr = parseInt(t / (60 * 60)) + \"\\u5C0F\\u65F6\\u524D\";\n  } else if (t < 60 * 60 * 24 * 30) {\n    newTimeStr = parseInt(t / (60 * 60 * 24)) + \"\\u5929\\u524D\";\n  } else {\n    newTimeStr = Object(_formatTime__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(new Date(old), format);\n  }\n\n  return newTimeStr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatTimeStr);\n\n//# sourceURL=webpack:///./src/modules/formatTimeStr.js?");

/***/ }),

/***/ "./src/modules/getAppVersion.js":
/*!**************************************!*\
  !*** ./src/modules/getAppVersion.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getAppVersion(appName, withappstr, userAgent) {\n  userAgent = userAgent || navigator.appVersion;\n  var reg = eval('/' + appName + '\\\\/([\\\\d\\\\.]+)/');\n  var isApp = userAgent.includes(appName);\n  var ver = userAgent.match(reg, 'i');\n\n  if (ver) {\n    if (withappstr) {\n      return ver ? ver[0] : '';\n    } else {\n      return ver ? ver[1] : '';\n    }\n  } else {\n    if (isApp) {\n      console.log(appName + \"\\u672A\\u77E5\\u7248\\u672C\\u53F7\");\n      return false;\n    } else {\n      console.log(appName + \"\\u4E0D\\u5B58\\u5728\");\n      return null;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAppVersion);\n\n//# sourceURL=webpack:///./src/modules/getAppVersion.js?");

/***/ }),

/***/ "./src/modules/getCHSLength.js":
/*!*************************************!*\
  !*** ./src/modules/getCHSLength.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getCHSLength(str) {\n  return str.replace(/[^\\x00-\\xff]/g, '**').length;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCHSLength);\n\n//# sourceURL=webpack:///./src/modules/getCHSLength.js?");

/***/ }),

/***/ "./src/modules/getCookie.js":
/*!**********************************!*\
  !*** ./src/modules/getCookie.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getCookie(name) {\n  var arr = void 0;\n  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');\n\n  if (arr = document.cookie.match(reg)) {\n    var obj = JSON.parse(decodeURIComponent(arr[2]));\n\n    if (!obj.hasOwnProperty('value') || !obj.hasOwnProperty('expires')) {\n      return null;\n    } else {\n      return obj.value;\n    }\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCookie);\n\n//# sourceURL=webpack:///./src/modules/getCookie.js?");

/***/ }),

/***/ "./src/modules/getDirParam.js":
/*!************************************!*\
  !*** ./src/modules/getDirParam.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getDirParam(url) {\n  var patt = new RegExp(/^http[s]?:\\/\\/[^\\/]+([\\s\\S]*)/);\n  var urlStr = url != '' && typeof url != 'undefined' ? url.replace(patt, '$1') : location.pathname;\n  urlStr = urlStr.replace(/^\\//, '');\n  var dirParam = {};\n  dirParam.host = url != '' && typeof url != 'undefined' ? url.match(/^http[s]?:\\/\\/[^\\/]+/)[0] : location.host;\n\n  if (urlStr.includes('/')) {\n    dirParam.path = decodeURI(urlStr).split('/');\n  }\n\n  return dirParam;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getDirParam);\n\n//# sourceURL=webpack:///./src/modules/getDirParam.js?");

/***/ }),

/***/ "./src/modules/getFileType.js":
/*!************************************!*\
  !*** ./src/modules/getFileType.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getFileType(url) {\n  if (typeof url != 'string' || url == '') {\n    return false;\n  }\n\n  var type = /\\.[^\\.]+$/.exec(url);\n  return type[0].toLowerCase();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getFileType);\n\n//# sourceURL=webpack:///./src/modules/getFileType.js?");

/***/ }),

/***/ "./src/modules/getIsAppVersionLastest.js":
/*!***********************************************!*\
  !*** ./src/modules/getIsAppVersionLastest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getAppVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAppVersion */ \"./src/modules/getAppVersion.js\");\n\n\nfunction getIsAppVersionLastest(appName, compareVer, userAgent) {\n  userAgent = userAgent || navigator.appVersion;\n  var basicVer = appName.indexOf('.') > 0 ? appName : Object(_getAppVersion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(appName, false, userAgent);\n\n  if (basicVer === null) {\n    return null;\n  }\n\n  if (basicVer === false) {\n    return false;\n  }\n\n  basicVer = basicVer + '.';\n  compareVer = compareVer + '.';\n  var bStr = parseFloat(basicVer);\n  var cStr = parseFloat(compareVer);\n  var bStrNext = parseFloat(basicVer.replace(bStr + '.', '')) || 0;\n  var cStrNext = parseFloat(compareVer.replace(cStr + '.', '')) || 0;\n\n  if (cStr > bStr) {\n    return false;\n  } else if (cStr < bStr) {\n    return true;\n  } else {\n    if (bStrNext >= cStrNext) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getIsAppVersionLastest);\n\n//# sourceURL=webpack:///./src/modules/getIsAppVersionLastest.js?");

/***/ }),

/***/ "./src/modules/getLocal.js":
/*!*********************************!*\
  !*** ./src/modules/getLocal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getLocal(name) {\n  var str = localStorage.getItem(name);\n  var exp = new Date();\n\n  if (str) {\n    var obj = JSON.parse(str);\n\n    if (!obj.hasOwnProperty('value') || !obj.hasOwnProperty('expires')) {\n      return null;\n    } else {\n      if (!obj.expires || obj.expires > exp.getTime()) {\n        return obj.value;\n      } else {\n        localStorage.removeItem(name);\n        return null;\n      }\n    }\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getLocal);\n\n//# sourceURL=webpack:///./src/modules/getLocal.js?");

/***/ }),

/***/ "./src/modules/getNumber.js":
/*!**********************************!*\
  !*** ./src/modules/getNumber.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getNumber = function getNumber(string) {\n  return string.replace(/[^0-9.]/gi, '');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getNumber);\n\n//# sourceURL=webpack:///./src/modules/getNumber.js?");

/***/ }),

/***/ "./src/modules/getOsVersion.js":
/*!*************************************!*\
  !*** ./src/modules/getOsVersion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getAppVersion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getAppVersion */ \"./src/modules/getAppVersion.js\");\n\n\nfunction getOsVersion(osName, withosstr, userAgent) {\n  userAgent = userAgent || navigator.appVersion;\n  var d = ['iPhone', 'iPad', 'iPod', 'iWatch', 'Mac', 'iMac', 'iOS'],\n      name = osName,\n      index = d.indexOf(osName);\n\n  if (index > -1 && userAgent.indexOf('like Mac OS X') > -1) {\n    name = 'OS';\n  }\n\n  var reg = eval('/' + name + '\\\\s[\\\\d\\\\_]+/');\n  var isApp = userAgent.includes(name);\n  var ver = (userAgent.match(reg, 'ig') + '').replace(/\\s/gi, '/').replace(/_/gi, '.');\n\n  if (index > -1) {\n    ver = ver.replace(/OS\\//gi, osName + '/');\n  }\n\n  return Object(_getAppVersion__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(osName, withosstr, ver);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getOsVersion);\n\n//# sourceURL=webpack:///./src/modules/getOsVersion.js?");

/***/ }),

/***/ "./src/modules/getParameter.js":
/*!*************************************!*\
  !*** ./src/modules/getParameter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getParameter(name) {\n  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');\n  var r = window.location.search.substr(1).match(reg);\n  if (r != null) return unescape(r[2]);\n  return null;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getParameter);\n\n//# sourceURL=webpack:///./src/modules/getParameter.js?");

/***/ }),

/***/ "./src/modules/getRandomNum.js":
/*!*************************************!*\
  !*** ./src/modules/getRandomNum.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getRandomNum = function getRandomNum() {\n  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;\n  var Range = max - min;\n  var Rand = Math.random();\n  return min + Math.round(Rand * Range);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getRandomNum);\n\n//# sourceURL=webpack:///./src/modules/getRandomNum.js?");

/***/ }),

/***/ "./src/modules/getRandomStr.js":
/*!*************************************!*\
  !*** ./src/modules/getRandomStr.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getRandomStr = function getRandomStr() {\n  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;\n  var widthSpecialChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  var chars = !widthSpecialChar ? 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' : 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678~!@#$^&*_+=-.';\n  var maxPos = chars.length;\n  var str = '';\n\n  for (var i = 0; i < len; i++) {\n    str += chars.charAt(Math.floor(Math.random() * maxPos));\n  }\n\n  return str;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getRandomStr);\n\n//# sourceURL=webpack:///./src/modules/getRandomStr.js?");

/***/ }),

/***/ "./src/modules/getRandomStrWidthSpecialChar.js":
/*!*****************************************************!*\
  !*** ./src/modules/getRandomStrWidthSpecialChar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getRandomStrWidthSpecialChar = function getRandomStrWidthSpecialChar() {\n  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;\n  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678~!@#$^&*_+=-.';\n  var maxPos = chars.length;\n  var str = '';\n\n  for (i = 0; i < len; i++) {\n    str += chars.charAt(Math.floor(Math.random() * maxPos));\n  }\n\n  return str;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getRandomStrWidthSpecialChar);\n\n//# sourceURL=webpack:///./src/modules/getRandomStrWidthSpecialChar.js?");

/***/ }),

/***/ "./src/modules/getScrollPosition.js":
/*!******************************************!*\
  !*** ./src/modules/getScrollPosition.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar getScrollPosition = function getScrollPosition() {\n  var innerH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n  var docScrollTop = document.documentElement.scrollTop;\n  var bodyScrollTop = document.body.scrollTop;\n  var docScrollHeight = document.documentElement.scrollHeight;\n  var bodyScrollHeight = document.body.scrollHeight;\n  var scrollT = 0,\n      scrollH = 0;\n\n  if (docScrollTop === 0) {\n    scrollT = bodyScrollTop;\n    scrollH = bodyScrollHeight;\n\n    if (bodyScrollTop === 0) {\n      return 'top';\n    }\n  } else {\n    scrollT = docScrollTop;\n    scrollH = docScrollHeight;\n  }\n\n  if (innerH + Math.floor(scrollT) === scrollH || innerH + Math.ceil(scrollT) === scrollH) {\n    return 'bottom';\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getScrollPosition);\n\n//# sourceURL=webpack:///./src/modules/getScrollPosition.js?");

/***/ }),

/***/ "./src/modules/getSession.js":
/*!***********************************!*\
  !*** ./src/modules/getSession.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getSession(name) {\n  var str = sessionStorage.getItem(name);\n  var exp = new Date();\n\n  if (str) {\n    var obj = JSON.parse(str);\n\n    if (!obj.hasOwnProperty('value') || !obj.hasOwnProperty('expires')) {\n      return null;\n    } else {\n      if (!obj.expires || obj.expires > exp.getTime()) {\n        return obj.value;\n      } else {\n        sessionStorage.removeItem(name);\n        return null;\n      }\n    }\n  } else {\n    return null;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getSession);\n\n//# sourceURL=webpack:///./src/modules/getSession.js?");

/***/ }),

/***/ "./src/modules/getUrlParam.js":
/*!************************************!*\
  !*** ./src/modules/getUrlParam.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getUrlParam(url) {\n  url = url !== '' && typeof url !== 'undefined' ? url.substr(url.indexOf('?')).split('#')[0] : location.search;\n  var search = url.substring(url.lastIndexOf('?') + 1);\n  var obj = {};\n  var reg = /([^?&=]+)=([^?&=]*)/g;\n  search.replace(reg, function (rs, $1, $2) {\n    var name = decodeURIComponent($1);\n    var val = decodeURIComponent($2);\n    val = String(val);\n    obj[name] = val;\n    return rs;\n  });\n  return obj;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getUrlParam);\n\n//# sourceURL=webpack:///./src/modules/getUrlParam.js?");

/***/ }),

/***/ "./src/modules/getWindowSize.js":
/*!**************************************!*\
  !*** ./src/modules/getWindowSize.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction getWindowSize() {\n  var s = {\n    width: 0,\n    height: 0\n  };\n\n  if (window.innerWidth) {\n    s.width = window.innerWidth;\n    s.height = window.innerHeight;\n  } else if (document.body && document.body.clientWidth) {\n    s.width = document.body.clientWidth;\n    s.height = document.body.clientHeight;\n  }\n\n  if (document.documentElement && document.documentElement.clientWidth) {\n    s.width = document.documentElement.clientWidth;\n    s.height = document.documentElement.clientHeight;\n  }\n\n  return s;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getWindowSize);\n\n//# sourceURL=webpack:///./src/modules/getWindowSize.js?");

/***/ }),

/***/ "./src/modules/imgAdapt.js":
/*!*********************************!*\
  !*** ./src/modules/imgAdapt.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar imgAdapt = function imgAdapt(imgurl, size) {\n  if (!imgurl) {\n    return false;\n  }\n\n  var imgPre = '';\n  var urlReg = new RegExp('(.jpg|.png|.gif|.jpeg|.bmp|.webx)$', 'i');\n  var preReg = new RegExp('([.small|.original].jpg|.png|.gif|.jpeg|.bmp|.webx)$', 'i');\n\n  switch (size) {\n    case 's':\n      imgPre = '.small';\n      return imgurl.replace(urlReg, '$1' + imgPre + '$1');\n      break;\n\n    case 'm':\n      imgPre = '';\n      return imgurl.replace(urlReg, '$1' + imgPre);\n      break;\n\n    case 'l':\n      imgPre = '.original';\n      return imgurl.replace(urlReg, '$1' + imgPre + '$1');\n      break;\n\n    default:\n      return imgurl;\n      break;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (imgAdapt);\n\n//# sourceURL=webpack:///./src/modules/imgAdapt.js?");

/***/ }),

/***/ "./src/modules/imgChoose.js":
/*!**********************************!*\
  !*** ./src/modules/imgChoose.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar imgChoose = function imgChoose(imgurl) {\n  var width = window.innerWidth;\n  var imgPre = '';\n  var urlReg = new RegExp('(.jpg|.png|.gif|.jpeg|.bmp)', 'i');\n  var preReg = new RegExp('(@[2|3]x)', 'i');\n\n  if (width >= 480) {\n    imgPre = '@3x';\n  } else if (width >= 320) {\n    imgPre = '@2x';\n  } else if (width >= 240) {\n    imgPre = '';\n  }\n\n  return imgurl.replace(preReg, '').replace(urlReg, imgPre + '$1');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (imgChoose);\n\n//# sourceURL=webpack:///./src/modules/imgChoose.js?");

/***/ }),

/***/ "./src/modules/isDigitals.js":
/*!***********************************!*\
  !*** ./src/modules/isDigitals.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar isDigitals = function isDigitals(str) {\n  return /^[0-9]*$/.test(str);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isDigitals);\n\n//# sourceURL=webpack:///./src/modules/isDigitals.js?");

/***/ }),

/***/ "./src/modules/isExitsFunction.js":
/*!****************************************!*\
  !*** ./src/modules/isExitsFunction.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction isExitsFunction(funcName) {\n  try {\n    if (typeof eval(funcName) === 'function') {\n      return true;\n    }\n  } catch (e) {}\n\n  return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isExitsFunction);\n\n//# sourceURL=webpack:///./src/modules/isExitsFunction.js?");

/***/ }),

/***/ "./src/modules/isExitsVariable.js":
/*!****************************************!*\
  !*** ./src/modules/isExitsVariable.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction isExitsVariable(variableName) {\n  try {\n    if (typeof variableName === 'undefined') {\n      return false;\n    } else {\n      return true;\n    }\n  } catch (e) {}\n\n  return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isExitsVariable);\n\n//# sourceURL=webpack:///./src/modules/isExitsVariable.js?");

/***/ }),

/***/ "./src/modules/pattern.js":
/*!********************************!*\
  !*** ./src/modules/pattern.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction pattern() {\n  return {\n    any: /[\\w\\W]+/,\n    number: /^\\d+$/,\n    string: /^[\\u4E00-\\u9FA5\\uf900-\\ufa2d\\w\\.\\s]+$/,\n    postcode: /^[0-9]{6}$/,\n    url: /^(\\w+:\\/\\/)?\\w+(\\.\\w+)+.*$/,\n    username: /^[a-zA-Z0-9\\_\\-\\.]{3,15}$/,\n    float: /^[0-9]+\\.{0,1}[0-9]{0,2}$/,\n    email: /^([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\\_|\\.]?)*[a-zA-Z0-9]+\\.[a-zA-Z]{2,3}$/,\n    mobile: /^1[3|4|5|7|8][0-9]\\d{8,8}$/,\n    chinese: /^[\\u4E00-\\u9FA5\\uf900-\\ufa2d]$/,\n    tel: /^(([0\\+]\\d{2,3}-)?(0\\d{2,3})-)?(\\d{7,8})(-(\\d{3,}))?$/,\n    qq: /^[1-9][0-9]{5,13}$/,\n    pass: /^(?![0-9\\W\\_]+$)(?![a-zA-Z\\W\\_]+$)[0-9a-zA-Z\\W\\_]{6,16}$/,\n    json: /^\\{[\\s\\S]*\\}$/,\n    arrjson: /^\\[\\{[\\s\\S]*\\}\\]$/,\n    array: /^\\[[\\s\\S]*\\]$/,\n    getjson: /[\\s\\S]*(\\{[\\s\\S]*\\})[\\s\\S]*/,\n    textarea: /[\\u4e00-\\u9fa5_a-zA-Z0-9\\,\\.\\/\\?\\;\\:\\'\\\"\\[\\]\\-\\*\\(\\)\\（\\）\\%\\$\\@\\\\\\!\\，\\《\\》\\。\\、\\？\\；\\：\\‘\\’\\“\\”\\…\\￥\\！]/,\n    repArticleHouse: /([\\s\\S]*)\\{\\{\\{articleHouse\\}\\}\\}([\\s\\S]*)/\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (pattern);\n\n//# sourceURL=webpack:///./src/modules/pattern.js?");

/***/ }),

/***/ "./src/modules/removeEvent.js":
/*!************************************!*\
  !*** ./src/modules/removeEvent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar removeEvent = function removeEvent(element, type, handler) {\n  if (element.removeEventListener) {\n    element.removeEventListener(type, handler, false);\n  } else {\n    if (element.events && element.events[type]) {\n      delete element.events[type][handler.$$guid];\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeEvent);\n\n//# sourceURL=webpack:///./src/modules/removeEvent.js?");

/***/ }),

/***/ "./src/modules/setCookie.js":
/*!**********************************!*\
  !*** ./src/modules/setCookie.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction setCookie(name, value, seconds) {\n  var e = new Date();\n  var expires = seconds ? e.getTime() + seconds : '';\n  var obj = encodeURIComponent(JSON.stringify({\n    value: value,\n    expires: expires\n  }));\n  seconds = seconds || 2592000000;\n  e.setTime(e.getTime() + seconds);\n  document.cookie = name + '=' + obj + ';expires=' + e.toGMTString() + ';path=/';\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setCookie);\n\n//# sourceURL=webpack:///./src/modules/setCookie.js?");

/***/ }),

/***/ "./src/modules/setLocal.js":
/*!*********************************!*\
  !*** ./src/modules/setLocal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction setLocal(name, value, seconds) {\n  var e = new Date();\n  var expires = seconds ? e.getTime() + seconds * 1000 : '';\n  var obj = {};\n  obj.value = value;\n  obj.expires = expires;\n  obj = JSON.stringify(obj);\n  localStorage.setItem(name, obj);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setLocal);\n\n//# sourceURL=webpack:///./src/modules/setLocal.js?");

/***/ }),

/***/ "./src/modules/setSession.js":
/*!***********************************!*\
  !*** ./src/modules/setSession.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction setSession(name, value, seconds) {\n  var e = new Date();\n  var expires = seconds ? e.getTime() + seconds * 1000 : '';\n  var obj = {};\n  obj.value = value;\n  obj.expires = expires;\n  obj = JSON.stringify(obj);\n  sessionStorage.setItem(name, obj);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (setSession);\n\n//# sourceURL=webpack:///./src/modules/setSession.js?");

/***/ }),

/***/ "./src/modules/stopBubble.js":
/*!***********************************!*\
  !*** ./src/modules/stopBubble.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction stopBubble(e) {\n  if (e && e.preventDefault) {\n    e.stopPropagation();\n  } else {\n    e.cancelBubble = true;\n  }\n\n  return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stopBubble);\n\n//# sourceURL=webpack:///./src/modules/stopBubble.js?");

/***/ }),

/***/ "./src/modules/stopDefault.js":
/*!************************************!*\
  !*** ./src/modules/stopDefault.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction stopDefault(e) {\n  if (e && e.preventDefault) {\n    e.preventDefault();\n  } else {\n    window.event.returnValue = false;\n  }\n\n  return false;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stopDefault);\n\n//# sourceURL=webpack:///./src/modules/stopDefault.js?");

/***/ }),

/***/ "./src/modules/textareaInsertText.js":
/*!*******************************************!*\
  !*** ./src/modules/textareaInsertText.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar textareaInsertText = function textareaInsertText(obj, str) {\n  if (document.selection) {\n    var sel = document.selection.createRange();\n    sel.text = str;\n  } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {\n    var startPos = obj.selectionStart,\n        endPos = obj.selectionEnd,\n        curPos = startPos,\n        tmpStr = obj.value;\n    obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);\n    curPos += str.length;\n    setTimeout(function () {\n      obj.selectionStart = obj.selectionEnd = curPos;\n    }, 0);\n  } else {\n    obj.value += str;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (textareaInsertText);\n\n//# sourceURL=webpack:///./src/modules/textareaInsertText.js?");

/***/ }),

/***/ "./src/modules/textareaMoveToEnd.js":
/*!******************************************!*\
  !*** ./src/modules/textareaMoveToEnd.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction textareaMoveToEnd(obj) {\n  obj.focus();\n  var len = obj.value.length;\n\n  if (document.selection) {\n    var sel = obj.createTextRange();\n    sel.moveStart('character', len);\n    sel.collapse();\n    sel.select();\n  } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {\n    obj.selectionStart = obj.selectionEnd = len;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (textareaMoveToEnd);\n\n//# sourceURL=webpack:///./src/modules/textareaMoveToEnd.js?");

/***/ }),

/***/ "./src/modules/throttle.js":
/*!*********************************!*\
  !*** ./src/modules/throttle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar throttle = function throttle(fn, delay, immediate, debounce) {\n  var curr = +new Date(),\n      last_call = 0,\n      last_exec = 0,\n      timer = null,\n      diff,\n      context,\n      args,\n      exec = function exec() {\n    last_exec = curr;\n    fn.apply(context, args);\n  };\n\n  return function () {\n    curr = +new Date();\n    context = this, args = arguments, diff = curr - (debounce ? last_call : last_exec) - delay;\n    clearTimeout(timer);\n\n    if (debounce) {\n      if (immediate) {\n        timer = setTimeout(exec, delay);\n      } else if (diff >= 0) {\n        exec();\n      }\n    } else {\n      if (diff >= 0) {\n        exec();\n      } else if (immediate) {\n        timer = setTimeout(exec, -diff);\n      }\n    }\n\n    last_call = curr;\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (throttle);\n\n//# sourceURL=webpack:///./src/modules/throttle.js?");

/***/ }),

/***/ "./src/modules/trim.js":
/*!*****************************!*\
  !*** ./src/modules/trim.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar trim = function trim(string) {\n  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  if (!type) {\n    return string.replace(/\\s/g, '');\n  } else if (type === 'l' || type === 'left') {\n    return string.replace(/^\\s*/, '');\n  } else if (type === 'r' || type === 'right') {\n    return string.replace(/\\s*$/, '');\n  } else if (type === 'lr' || type === 'around') {\n    return string.replace(/(^\\s*)|(\\s*$)/g, '');\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (trim);\n\n//# sourceURL=webpack:///./src/modules/trim.js?");

/***/ })

/******/ });
});