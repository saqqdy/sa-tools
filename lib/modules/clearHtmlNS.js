"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var clearHtmlNS = function clearHtmlNS(string) {
  return string.replace(/<\/?.+?>|[\r\n\s]|(\ )/g, '');
};

var _default = clearHtmlNS;
exports.default = _default;