"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getScrollPosition = function getScrollPosition() {
  var innerH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var docScrollTop = document.documentElement.scrollTop;
  var bodyScrollTop = document.body.scrollTop;
  var docScrollHeight = document.documentElement.scrollHeight;
  var bodyScrollHeight = document.body.scrollHeight;
  var scrollT = 0,
      scrollH = 0;

  if (docScrollTop === 0) {
    scrollT = bodyScrollTop;
    scrollH = bodyScrollHeight;

    if (bodyScrollTop === 0) {
      return 'top';
    }
  } else {
    scrollT = docScrollTop;
    scrollH = docScrollHeight;
  }

  if (innerH + Math.floor(scrollT) === scrollH || innerH + Math.ceil(scrollT) === scrollH) {
    return 'bottom';
  }
};

var _default = getScrollPosition;
exports.default = _default;