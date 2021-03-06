"use strict";

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getAppVersion = _interopRequireDefault(require("./getAppVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getIsAppVersionLastest(appName, compareVer, userAgent) {
  userAgent = userAgent || navigator.appVersion;
  var basicVer = appName.indexOf('.') > 0 ? appName : (0, _getAppVersion.default)(appName, false, userAgent);

  if (basicVer === null) {
    return null;
  }

  if (basicVer === false) {
    return false;
  }

  basicVer = basicVer + '.';
  compareVer = compareVer + '.';
  var bStr = parseFloat(basicVer);
  var cStr = parseFloat(compareVer);
  var bStrNext = parseFloat(basicVer.replace(bStr + '.', '')) || 0;
  var cStrNext = parseFloat(compareVer.replace(cStr + '.', '')) || 0;

  if (cStr > bStr) {
    return false;
  } else if (cStr < bStr) {
    return true;
  } else {
    if (bStrNext >= cStrNext) {
      return true;
    } else {
      return false;
    }
  }
}

var _default = getIsAppVersionLastest;
exports.default = _default;