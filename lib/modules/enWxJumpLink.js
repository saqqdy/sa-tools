"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var enWxJumpLink = function enWxJumpLink(string) {
  return string.replace(/[=]{1}/g, '*').replace(/[&]{1}/g, '!').replace(/[\[]{1}/g, '(').replace(/[\]]{1}/g, ')');
};

var _default = enWxJumpLink;
exports.default = _default;