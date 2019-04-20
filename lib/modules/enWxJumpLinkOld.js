"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var enWxJumpLinkOld = function enWxJumpLinkOld(string) {
  return string.replace(/[=]/gi, '~').replace(/[&]/gi, '^');
};

var _default = enWxJumpLinkOld;
exports.default = _default;