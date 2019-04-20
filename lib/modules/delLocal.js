"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function delLocal(name) {
  localStorage.removeItem(name);
}

var _default = delLocal;
exports.default = _default;