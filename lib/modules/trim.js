"use strict";

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var trim = function trim(string) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (!type) {
    return string.replace(/\s/g, '');
  } else if (type === 'l' || type === 'left') {
    return string.replace(/^\s*/, '');
  } else if (type === 'r' || type === 'right') {
    return string.replace(/\s*$/, '');
  } else if (type === 'lr' || type === 'around') {
    return string.replace(/(^\s*)|(\s*$)/g, '');
  }
};

var _default = trim;
exports.default = _default;