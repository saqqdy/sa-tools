"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function delSession(name) {
  sessionStorage.removeItem(name);
}

var _default = delSession;
exports.default = _default;