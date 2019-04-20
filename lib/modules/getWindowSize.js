"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getWindowSize() {
  var s = {
    width: 0,
    height: 0
  };

  if (window.innerWidth) {
    s.width = window.innerWidth;
    s.height = window.innerHeight;
  } else if (document.body && document.body.clientWidth) {
    s.width = document.body.clientWidth;
    s.height = document.body.clientHeight;
  }

  if (document.documentElement && document.documentElement.clientWidth) {
    s.width = document.documentElement.clientWidth;
    s.height = document.documentElement.clientHeight;
  }

  return s;
}

var _default = getWindowSize;
exports.default = _default;