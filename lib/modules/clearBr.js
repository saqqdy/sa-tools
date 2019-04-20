"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var clearBr = function clearBr(string) {
  return string.replace(/<\/br>/g, '').replace(/<br>/g, '').replace(/[\r\n]/g, '');
};

var _default = clearBr;
exports.default = _default;