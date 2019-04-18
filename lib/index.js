"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = _interopRequireDefault(require("./modules/client"));

var _setCookie = _interopRequireDefault(require("./modules/setCookie"));

var _getCookie = _interopRequireDefault(require("./modules/getCookie"));

var _delCookie = _interopRequireDefault(require("./modules/delCookie"));

var _addEvent = _interopRequireDefault(require("./modules/addEvent"));

var _removeEvent = _interopRequireDefault(require("./modules/removeEvent"));

var _pattern = _interopRequireDefault(require("./modules/pattern"));

var _getOsVersion = _interopRequireDefault(require("./modules/getOsVersion"));

var _getAppVersion = _interopRequireDefault(require("./modules/getAppVersion"));

var _getIsAppVersionLastest = _interopRequireDefault(require("./modules/getIsAppVersionLastest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log({
  client: (0, _client.default)(),
  pattern: (0, _pattern.default)(),
  setCookie: _setCookie.default,
  getCookie: _getCookie.default,
  delCookie: _delCookie.default,
  addEvent: _addEvent.default,
  removeEvent: _removeEvent.default,
  getOsVersion: _getOsVersion.default,
  getAppVersion: _getAppVersion.default,
  getIsAppVersionLastest: _getIsAppVersionLastest.default
});
var _default = {
  client: (0, _client.default)(),
  pattern: (0, _pattern.default)(),
  setCookie: _setCookie.default,
  getCookie: _getCookie.default,
  delCookie: _delCookie.default,
  addEvent: _addEvent.default,
  removeEvent: _removeEvent.default,
  getOsVersion: _getOsVersion.default,
  getAppVersion: _getAppVersion.default,
  getIsAppVersionLastest: _getIsAppVersionLastest.default
};
exports.default = _default;