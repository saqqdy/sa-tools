"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var deWxJumpLink = function deWxJumpLink(string) {
  return string.replace(/[*]{1}/g, '=').replace(/[!]{1}/g, '&').replace(/[\(]{1}/g, '[').replace(/[\)]{1}/g, ']');
};

var _default = deWxJumpLink;
exports.default = _default;