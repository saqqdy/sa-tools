"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getCookie = _interopRequireDefault(require("./getCookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function delCookie(name) {
  var e = new Date();
  e.setTime(e.getTime() - 1);
  var cval = (0, _getCookie.default)(name);

  if (cval !== null) {
    document.cookie = name + '=' + cval + ';expires=' + e.toGMTString() + ';path=/';
  }
}

var _default = delCookie;
exports.default = _default;