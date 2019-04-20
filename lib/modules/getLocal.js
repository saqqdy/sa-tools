"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getLocal(name) {
  var str = localStorage.getItem(name);
  var exp = new Date();

  if (str) {
    var obj = JSON.parse(str);

    if (!obj.hasOwnProperty('value') || !obj.hasOwnProperty('expires')) {
      return null;
    } else {
      if (!obj.expires || obj.expires > exp.getTime()) {
        return obj.value;
      } else {
        localStorage.removeItem(name);
        return null;
      }
    }
  } else {
    return null;
  }
}

var _default = getLocal;
exports.default = _default;