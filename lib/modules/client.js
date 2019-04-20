"use strict";

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.string.match");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var client = function client() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var userAgent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : navigator.appVersion;
  var userAgentL = userAgent.toLowerCase();

  if (name) {
    return userAgent.indexOf(name) > -1;
  } else {
    return {
      IE: userAgentL.indexOf('msie') > -1 && !userAgentL.indexOf('opera') > -1,
      GECKO: userAgentL.indexOf('gecko') > -1 && !userAgentL.indexOf('khtml') > -1,
      WEBKIT: userAgentL.indexOf('applewebkit') > -1,
      OPERA: userAgentL.indexOf('opera') > -1 && userAgentL.indexOf('presto') > -1,
      TRIDENT: userAgentL.indexOf('trident') > -1,
      MOBILE: !!userAgent.match(/AppleWebKit.*Mobile.*/),
      IOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      ANDROID: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1,
      IPHONE: userAgent.indexOf('iPhone') > -1,
      IPAD: userAgent.indexOf('iPad') > -1,
      QQBROWSER: userAgent.indexOf('QQBrowser') > -1,
      WEIXIN: userAgent.indexOf('MicroMessenger') > -1,
      QQ: userAgent.match(/\sQQ/i) === ' qq'
    };
  }
};

var _default = client;
exports.default = _default;