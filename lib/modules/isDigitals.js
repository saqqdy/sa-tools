"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var isDigitals = function isDigitals(str) {
  return /^[0-9]*$/.test(str);
};

var _default = isDigitals;
exports.default = _default;