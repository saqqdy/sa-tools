"use strict";

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.match");

require("core-js/modules/es.string.replace");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function cutCHSString(str) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : str.length;
  var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (str == '' || !str) {
    return '';
  } else {
    var newLength = 0;
    var newStr = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = '';
    var strLength = str.replace(chineseRegex, '**').length;

    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();

      if (singleChar.match(chineseRegex) != null) {
        newLength += 2;
      } else {
        newLength++;
      }

      if (newLength > len) {
        break;
      }

      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }

    return newStr;
  }
}

var _default = cutCHSString;
exports.default = _default;