"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getCHSLength(str) {
  return str.replace(/[^\x00-\xff]/g, '**').length;
}

var _default = getCHSLength;
exports.default = _default;