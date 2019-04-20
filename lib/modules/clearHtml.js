"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var clearHtml = function clearHtml(string) {
  return string.replace(/<\/?.+?>/g, '').replace(/[\r\n]/g, '');
};

var _default = clearHtml;
exports.default = _default;