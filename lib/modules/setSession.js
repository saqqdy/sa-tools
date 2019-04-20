"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function setSession(name, value, seconds) {
  var e = new Date();
  var expires = seconds ? e.getTime() + seconds * 1000 : '';
  var obj = {};
  obj.value = value;
  obj.expires = expires;
  obj = JSON.stringify(obj);
  sessionStorage.setItem(name, obj);
}

var _default = setSession;
exports.default = _default;