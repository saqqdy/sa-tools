"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isExitsVariable(variableName) {
  try {
    if (typeof variableName === 'undefined') {
      return false;
    } else {
      return true;
    }
  } catch (e) {}

  return false;
}

var _default = isExitsVariable;
exports.default = _default;