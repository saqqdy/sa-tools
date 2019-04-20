"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var clearHtmlTag = function clearHtmlTag(string) {
  return string.replace(/<[^>]+>/g, '');
};

var _default = clearHtmlTag;
exports.default = _default;