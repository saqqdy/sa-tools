"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var addEvent = function addEvent(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else {
    if (!handler.$$guid) handler.$$guid = addEvent.guid++;
    if (!element.events) element.events = {};
    var handlers = element.events[type];

    if (!handlers) {
      handlers = element.events[type] = {};

      if (element['on' + type]) {
        handlers[0] = element['on' + type];
      }
    }

    handlers[handler.$$guid] = handler;
    element['on' + type] = handleEvent;
  }
};

addEvent.guid = 1;

function handleEvent(event) {
  var returnValue = true;
  event = event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
  var handlers = this.events[event.type];

  for (var i in handlers) {
    this.$$handleEvent = handlers[i];

    if (this.$$handleEvent(event) === false) {
      returnValue = false;
    }
  }

  return returnValue;
}

function fixEvent(event) {
  event.preventDefault = fixEvent.preventDefault;
  event.stopPropagation = fixEvent.stopPropagation;
  return event;
}

fixEvent.preventDefault = function () {
  this.returnValue = false;
};

fixEvent.stopPropagation = function () {
  this.cancelBubble = true;
};

var _default = addEvent;
exports.default = _default;