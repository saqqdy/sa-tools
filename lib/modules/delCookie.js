"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function delCookie(name, useLocalStorage) {
  useLocalStorage = typeof useLocalStorage !== 'undefined' ? useLocalStorage : true;

  if (window.localStorage && useLocalStorage) {
    localStorage.removeItem(name);
  } else {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);

    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/';
    }
  }
}

var _default = delCookie;
exports.default = _default;