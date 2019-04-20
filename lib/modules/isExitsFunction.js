"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function isExitsFunction(funcName) {
  try {
    if (typeof eval(funcName) === 'function') {
      return true;
    }
  } catch (e) {}

  return false;
}

var _default = isExitsFunction;
exports.default = _default;