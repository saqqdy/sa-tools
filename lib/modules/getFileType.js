"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getFileType(url) {
  if (typeof url != 'string' || url == '') {
    return false;
  }

  var type = /\.[^\.]+$/.exec(url);
  return type[0].toLowerCase();
}

var _default = getFileType;
exports.default = _default;