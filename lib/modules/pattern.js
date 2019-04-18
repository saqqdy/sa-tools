"use strict";

require("core-js/modules/es.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function pattern() {
  return {
    any: /[\w\W]+/,
    number: /^\d+$/,
    string: /^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
    postcode: /^[0-9]{6}$/,
    url: /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
    username: /^[a-zA-Z0-9\_\-\.]{3,15}$/,
    float: /^[0-9]+\.{0,1}[0-9]{0,2}$/,
    email: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
    mobile: /^1[3|4|5|7|8][0-9]\d{8,8}$/,
    chinese: /^[\u4E00-\u9FA5\uf900-\ufa2d]$/,
    tel: /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
    qq: /^[1-9][0-9]{5,13}$/,
    pass: /^(?![0-9\W\_]+$)(?![a-zA-Z\W\_]+$)[0-9a-zA-Z\W\_]{6,16}$/,
    json: /^\{[\s\S]*\}$/,
    arrjson: /^\[\{[\s\S]*\}\]$/,
    array: /^\[[\s\S]*\]$/,
    getjson: /[\s\S]*(\{[\s\S]*\})[\s\S]*/,
    textarea: /[\u4e00-\u9fa5_a-zA-Z0-9\,\.\/\?\;\:\'\"\[\]\-\*\(\)\（\）\%\$\@\\\!\，\《\》\。\、\？\；\：\‘\’\“\”\…\￥\！]/,
    repArticleHouse: /([\s\S]*)\{\{\{articleHouse\}\}\}([\s\S]*)/
  };
}

var _default = pattern;
exports.default = _default;