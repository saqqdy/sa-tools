"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.regexp.constructor");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getDirParam(url) {
  var patt = new RegExp(/^http[s]?:\/\/[^\/]+([\s\S]*)/);
  var urlStr = url != '' && typeof url != 'undefined' ? url.replace(patt, '$1') : location.pathname;
  urlStr = urlStr.replace(/^\//, '');
  var dirParam = {};
  dirParam.host = url != '' && typeof url != 'undefined' ? url.match(/^http[s]?:\/\/[^\/]+/)[0] : location.host;

  if (urlStr.includes('/')) {
    dirParam.path = decodeURI(urlStr).split('/');
  }

  return dirParam;
}

var _default = getDirParam;
exports.default = _default;