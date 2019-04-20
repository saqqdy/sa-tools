"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getNumber = function getNumber(string) {
  return string.replace(/[^0-9.]/gi, '');
};

var _default = getNumber;
exports.default = _default;