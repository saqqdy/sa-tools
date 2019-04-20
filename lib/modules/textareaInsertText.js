"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var textareaInsertText = function textareaInsertText(obj, str) {
  if (document.selection) {
    var sel = document.selection.createRange();
    sel.text = str;
  } else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
    var startPos = obj.selectionStart,
        endPos = obj.selectionEnd,
        curPos = startPos,
        tmpStr = obj.value;
    obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
    curPos += str.length;
    setTimeout(function () {
      obj.selectionStart = obj.selectionEnd = curPos;
    }, 0);
  } else {
    obj.value += str;
  }
};

var _default = textareaInsertText;
exports.default = _default;