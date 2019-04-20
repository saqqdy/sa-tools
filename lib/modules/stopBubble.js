"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function stopBubble(e) {
  if (e && e.preventDefault) {
    e.stopPropagation();
  } else {
    e.cancelBubble = true;
  }

  return false;
}

var _default = stopBubble;
exports.default = _default;