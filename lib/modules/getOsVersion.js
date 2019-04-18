"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getOsVersion(osName, withosstr, userAgent) {
  userAgent = userAgent || navigator.appVersion;
  var d = ['iPhone', 'iPad', 'iPod', 'iWatch', 'Mac', 'iMac', 'iOS'],
      name = osName,
      index = d.indexOf(osName);

  if (index > -1 && userAgent.indexOf('like Mac OS X') > -1) {
    name = 'OS';
  }

  var reg = eval('/' + name + '\\s[\\d\\_]+/');
  var isApp = userAgent.includes(name);
  var ver = (userAgent.match(reg, 'ig') + '').replace(/\s/gi, '/').replace(/_/gi, '.');

  if (index > -1) {
    ver = ver.replace(/OS\//gi, osName + '/');
  }

  return getAppVersion(osName, withosstr, ver);
}

var _default = getOsVersion;
exports.default = _default;