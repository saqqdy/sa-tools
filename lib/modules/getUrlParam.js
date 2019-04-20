"use strict";

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.array.last-index-of");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.search");

require("core-js/modules/es.string.split");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getUrlParam(url) {
  url = url !== '' && typeof url !== 'undefined' ? url.substr(url.indexOf('?')).split('#')[0] : location.search;
  var search = url.substring(url.lastIndexOf('?') + 1);
  var obj = {};
  var reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, function (rs, $1, $2) {
    var name = decodeURIComponent($1);
    var val = decodeURIComponent($2);
    val = String(val);
    obj[name] = val;
    return rs;
  });
  return obj;
}

var _default = getUrlParam;
exports.default = _default;