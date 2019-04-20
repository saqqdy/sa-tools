"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getRandomNum = function getRandomNum() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var Range = max - min;
  var Rand = Math.random();
  return min + Math.round(Rand * Range);
};

var _default = getRandomNum;
exports.default = _default;