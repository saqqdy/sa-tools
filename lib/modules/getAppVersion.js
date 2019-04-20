"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.match");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getAppVersion(appName, withappstr, userAgent) {
  userAgent = userAgent || navigator.appVersion;
  var reg = eval('/' + appName + '\\/([\\d\\.]+)/');
  var isApp = userAgent.includes(appName);
  var ver = userAgent.match(reg, 'i');

  if (ver) {
    if (withappstr) {
      return ver ? ver[0] : '';
    } else {
      return ver ? ver[1] : '';
    }
  } else {
    if (isApp) {
      console.log(appName + "\u672A\u77E5\u7248\u672C\u53F7");
      return false;
    } else {
      console.log(appName + "\u4E0D\u5B58\u5728");
      return null;
    }
  }
}

var _default = getAppVersion;
exports.default = _default;