"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _throttle = _interopRequireDefault(require("./throttle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debounce = function debounce(fn, delay, immediate) {
  return (0, _throttle.default)(fn, delay, immediate, true);
};

var _default = debounce;
exports.default = _default;