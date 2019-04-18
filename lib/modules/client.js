"use strict";

require("core-js/modules/es.array.index-of");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.match");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var client = function client(userAgent) {
  userAgent = userAgent || navigator.appVersion || '';
  var userAgentL = userAgent.toLowerCase();
  return {
    IE: userAgentL.indexOf('msie') > -1 && !userAgentL.indexOf('opera') > -1,
    GECKO: userAgentL.indexOf('gecko') > -1 && !userAgentL.indexOf('khtml') > -1,
    WEBKIT: userAgentL.indexOf('applewebkit') > -1,
    OPERA: userAgentL.indexOf('opera') > -1 && userAgentL.indexOf('presto') > -1,
    TRIDENT: userAgentL.indexOf('trident') > -1,
    MOBILE: !!userAgent.match(/AppleWebKit.*Mobile.*/),
    MOBILEDEVICE: !!userAgentL.match(/iphone|android|phone|mobile|wap|netfront|x11|java|opera mobi|opera mini|ucweb|windows ce|symbian|symbianos|series|webos|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier|^lct|320x320|240x320|176x220/i),
    IOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    ANDROID: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1,
    IPHONE: userAgent.indexOf('iPhone') > -1,
    IPAD: userAgent.indexOf('iPad') > -1,
    QQBROWSER: userAgent.indexOf('QQBrowser') > -1,
    WEIXIN: userAgent.indexOf('MicroMessenger') > -1,
    QQ: userAgent.match(/\sQQ/i) === ' qq',
    GLSH_APP: userAgent.indexOf('GeiLe_SC_H5') > -1
  };
};

var _default = client;
exports.default = _default;