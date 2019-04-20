"use strict";

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var imgChoose = function imgChoose(imgurl) {
  var width = window.innerWidth;
  var imgPre = '';
  var urlReg = new RegExp('(.jpg|.png|.gif|.jpeg|.bmp)', 'i');
  var preReg = new RegExp('(@[2|3]x)', 'i');

  if (width >= 480) {
    imgPre = '@3x';
  } else if (width >= 320) {
    imgPre = '@2x';
  } else if (width >= 240) {
    imgPre = '';
  }

  return imgurl.replace(preReg, '').replace(urlReg, imgPre + '$1');
};

var _default = imgChoose;
exports.default = _default;