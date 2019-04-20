"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getRandomStrWidthSpecialChar = function getRandomStrWidthSpecialChar() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678~!@#$^&*_+=-.';
  var maxPos = chars.length;
  var str = '';

  for (i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return str;
};

var _default = getRandomStrWidthSpecialChar;
exports.default = _default;