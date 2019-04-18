"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function setCookie(name, value, time, useLocalStorage) {
  useLocalStorage = typeof useLocalStorage !== 'undefined' ? useLocalStorage : true;
  var strsec = time;
  var exp = new Date();
  var expires = strsec ? exp.getTime() + strsec : '';
  var obj = {};
  obj.value = value;
  obj.expires = expires;
  obj = encodeURIComponent(JSON.stringify(obj));

  if (window.localStorage && useLocalStorage) {
    localStorage.setItem(name, obj);
  } else {
    strsec = strsec ? strsec : 2592000000;
    exp.setTime(exp.getTime() + strsec);
    document.cookie = name + '=' + obj + ';expires=' + exp.toGMTString() + ';path=/';
  }
}

var _default = setCookie;
exports.default = _default;