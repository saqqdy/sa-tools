"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function setCookie(name, value, seconds) {
  var e = new Date();
  var expires = seconds ? e.getTime() + seconds : '';
  var obj = encodeURIComponent(JSON.stringify({
    value: value,
    expires: expires
  }));
  seconds = seconds || 2592000000;
  e.setTime(e.getTime() + seconds);
  document.cookie = name + '=' + obj + ';expires=' + e.toGMTString() + ';path=/';
}

var _default = setCookie;
exports.default = _default;