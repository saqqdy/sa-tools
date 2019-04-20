"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var removeEvent = function removeEvent(element, type, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(type, handler, false);
  } else {
    if (element.events && element.events[type]) {
      delete element.events[type][handler.$$guid];
    }
  }
};

var _default = removeEvent;
exports.default = _default;