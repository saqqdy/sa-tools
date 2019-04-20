"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var clearHtmlN = function clearHtmlN(string) {
  return string.replace(/<\/?.+?>|[\r\n]/g, '');
};

var _default = clearHtmlN;
exports.default = _default;