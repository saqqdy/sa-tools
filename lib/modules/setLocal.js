"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function setLocal(name, value, seconds) {
  var e = new Date();
  var expires = seconds ? e.getTime() + seconds * 1000 : '';
  var obj = {};
  obj.value = value;
  obj.expires = expires;
  obj = JSON.stringify(obj);
  localStorage.setItem(name, obj);
}

var _default = setLocal;
exports.default = _default;