"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getRandomStr = function getRandomStr() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
  var widthSpecialChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var chars = !widthSpecialChar ? 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678' : 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678~!@#$^&*_+=-.';
  var maxPos = chars.length;
  var str = '';

  for (var i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }

  return str;
};

var _default = getRandomStr;
exports.default = _default;