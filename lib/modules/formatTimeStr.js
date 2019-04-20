"use strict";

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.parse-int");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _formatTime = _interopRequireDefault(require("./formatTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatTimeStr() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : parseInt(time, 10);
  var fmt = arguments.length > 1 ? arguments[1] : undefined;
  var now = new Date().getTime();
  var format = fmt != '' && fmt != null ? fmt : 'MM-dd';
  var old = time;

  if (!old || old < 1) {
    return;
  }

  var t = now - old;
  var newTimeStr = '';

  if (t < 60 * 2) {
    newTimeStr = '刚刚';
  } else if (t < 60 * 60) {
    newTimeStr = parseInt(t / 60) + "\u5206\u949F\u524D";
  } else if (t < 60 * 60 * 24) {
    newTimeStr = parseInt(t / (60 * 60)) + "\u5C0F\u65F6\u524D";
  } else if (t < 60 * 60 * 24 * 30) {
    newTimeStr = parseInt(t / (60 * 60 * 24)) + "\u5929\u524D";
  } else {
    newTimeStr = (0, _formatTime.default)(new Date(old), format);
  }

  return newTimeStr;
}

var _default = formatTimeStr;
exports.default = _default;