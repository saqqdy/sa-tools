"use strict";

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.match");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getCookie(name) {
  var arr = void 0;
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');

  if (arr = document.cookie.match(reg)) {
    var obj = JSON.parse(decodeURIComponent(arr[2]));

    if (!obj.hasOwnProperty('value') || !obj.hasOwnProperty('expires')) {
      return null;
    } else {
      return obj.value;
    }
  } else {
    return null;
  }
}

var _default = getCookie;
exports.default = _default;