"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function setCookie(name, value, seconds) {
  var e = new Date();
  var expires = '';

  if (seconds !== '' && typeof seconds !== 'undefined') {
    seconds = seconds * 1000;
    expires = e.getTime() + seconds;
  } else {
    seconds = 2592000000;
  }

  var obj = encodeURIComponent(JSON.stringify({
    value: value,
    expires: expires
  }));
  e.setTime(e.getTime() + seconds);
  document.cookie = name + '=' + obj + ';expires=' + e.toGMTString() + ';path=/';
}

var _default = setCookie;
exports.default = _default;