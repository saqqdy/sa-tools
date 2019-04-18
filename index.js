
// "use strict";
/**
 * @Author: saqqdy
 * @Date: 2018-08-18 20:35:04
 * @Last Modified by: saqqdy.com
 * @Last Modified time: 2018-08-18 20: 35: 04
 */

Array.prototype.indexOf = function(obj){
  var result = -1, length = this.length, i = length - 1;
  for ( ; i>=0 ; i-- ) {
    if ( this[i] == obj ) {
      result = i;
      break;
    }
  }
  return result;
}
var indexOf = function(obj){
  return obj.indexOf();
}

Array.prototype.contains = function(obj) {
  return ( this.indexOf(obj) >=0 )
}
var contains = function(obj){
  return obj.contains();
}

Array.prototype.append = function(obj, nodup) {
  if ( !(nodup && this.contains(obj)) ) {
    this[this.length] = obj;
  }
}
var append = function( obj, nodup ){
  return obj.append();
}

Array.prototype.remove = function(obj) {
  var index = this.indexOf(obj);
  if ( !index ) return ;
  return this.splice( index , 1);
};
var remove = function(obj){
  return obj.remove();
}

// function addEvent(element, type, handler) {
//   if (element.addEventListener) {
//     element.addEventListener(type, handler, false);
//   } else {
//     //为每一个事件处理函数分派一个唯一的ID
//     if (!handler.$$guid) handler.$$guid = addEvent.guid++;
//     //为元素的事件类型创建一个哈希表
//     if (!element.events) element.events = {};
//     //为每一个"元素/事件"对创建一个事件处理程序的哈希表
//     var handlers = element.events[type];
//     if (!handlers) {
//       handlers = element.events[type] = {};
//       //存储存在的事件处理函数(如果有)
//       if (element["on" + type]) {
//         handlers[0] = element["on" + type];
//       }
//     }
//     //将事件处理函数存入哈希表
//     handlers[handler.$$guid] = handler;
//     //指派一个全局的事件处理函数来做所有的工作
//     element["on" + type] = handleEvent;
//   }
// }
// // a counter used to create unique IDs
// addEvent.guid = 1;

// function removeEvent(element, type, handler) {
//   if (element.removeEventListener) {
//     element.removeEventListener(type, handler, false);
//   } else {
//     //从哈希表中删除事件处理函数
//     if (element.events && element.events[type]) {
//       delete element.events[type][handler.$$guid];
//     }
//   }
// }

// function handleEvent(event) {
//   var returnValue = true;
//   //抓获事件对象(IE使用全局事件对象)
//   event = event || fixEvent(((this.ownerDocument || this.document || this).parentWindow || window).event);
//   //取得事件处理函数的哈希表的引用
//   var handlers = this.events[event.type];
//   //执行每一个处理函数
//   for (var i in handlers) {
//     this.$$handleEvent = handlers[i];
//     if (this.$$handleEvent(event) === false) {
//       returnValue = false;
//     }
//   }
//   return returnValue;
// }

// //为IE的事件对象添加一些“缺失的”函数
// function fixEvent(event) {
//   //添加标准的W3C方法
//   event.preventDefault = fixEvent.preventDefault;
//   event.stopPropagation = fixEvent.stopPropagation;
//   return event;
// };
// fixEvent.preventDefault = function() {
//   this.returnValue = false;
// };
// fixEvent.stopPropagation = function() {
//   this.cancelBubble = true;
// };







var client = {
  ver: function ver(userAgent) {
    if (!userAgent) {
      console.log("userAgent参数不可为空");
      return null;
    } else {
      var userAgentL = userAgent.toLowerCase();
      return {
        //VERSION:userAgent.match(/(msie|firefox|webkit|opera)[\/:\s](\d+)/) ? RegExp.$2 : "0",
        IE: userAgentL.indexOf("msie") > -1 && !userAgentL.indexOf("opera") > -1,
        GECKO: userAgentL.indexOf("gecko") > -1 && !userAgentL.indexOf("khtml") > -1, //火狐内核
        WEBKIT: userAgentL.indexOf("applewebkit") > -1, //苹果、谷歌内核
        OPERA: userAgentL.indexOf("opera") > -1 && userAgentL.indexOf("presto") > -1, //opera内核
        TRIDENT: userAgentL.indexOf('trident') > -1, //IE内核
        //ie: appVersion.indexOf("MSIE") > -1 && window.navigator.appName.toLowerCase().indexOf("microsoft") > -1,//判断是否为IE浏览器（不包含IE11）
        // iei: !!window.ActiveXObject || "ActiveXObject" in window,//判断是否为IE浏览器
        MOBILE: !!userAgent.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        MOBILEDEVICE: !!userAgentL.match(/iphone|android|phone|mobile|wap|netfront|x11|java|opera mobi|opera mini|ucweb|windows ce|symbian|symbianos|series|webos|sony|blackberry|dopod|nokia|samsung|palmsource|xda|pieplus|meizu|midp|cldc|motorola|foma|docomo|up.browser|up.link|blazer|helio|hosin|huawei|novarra|coolpad|webos|techfaith|palmsource|alcatel|amoi|ktouch|nexian|ericsson|philips|sagem|wellcom|bunjalloo|maui|smartphone|iemobile|spice|bird|zte-|longcos|pantech|gionee|portalmmm|jig browser|hiptop|benq|haier|^lct|320x320|240x320|176x220/i), //是否为移动终端
        IOS: !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        ANDROID: userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1, //android终端或者uc浏览器
        IPHONE: userAgent.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        IPAD: userAgent.indexOf('iPad') > -1, //是否iPad
        // WEBAPP: !userAgent.indexOf('Safari') > -1, //是否web应该程序，没有头部与底部
        QQBROWSER: userAgent.indexOf('QQBrowser') > -1, //是否QQ浏览器
        WEIXIN: userAgent.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
        QQ: userAgent.match(/\sQQ/i) == " qq", //是否QQ
        ZY: userAgent.indexOf('HXY') > -1 || userAgent.indexOf('HaoXueYuan') > -1, //知业APP
        JMM: userAgent.indexOf('JMM') > -1 //美家APP
      };
    }
  }
};

//
// //扩展trim(),ltrim(),rtrim()去除字符串两端空格
// String.prototype.trim=function(){
//   return this.replace(/(^\s*)|(\s*$)/g,"");
// }
// String.prototype.ltrim=function(){
//   return this.replace(/(^\s*)/g,"");
// }
// String.prototype.rtrim=function(){
//   return this.replace(/(\s*$)/g,"");
// }
// //去除字符串中间空格
// String.prototype.ctrim=function(){
//   return this.replace(/\s/g,'');
// }
// //扩展delHtmlTag()去除HTML标签及标签里面的文字
// String.prototype.delHtmlTag=function(){
//   return this.replace(/<[^>]+>/g,"");
// }
// //去除换行
// String.prototype.clearBr=function(){
//   return this.replace(/<\/br>/g,"").replace(/<br>/g,"").replace(/[\r\n]/g,"");
//   //return this.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g,"");
// }
// //去除HTML标签
// String.prototype.clearHtml=function(){
//   //return this.replace(/<\/br>/g,"").replace(/<br>/g,"").replace(/[\r\n]/g,"");
//   return this.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g,"");
// }
// //去除HTML标签及空格、换行
// String.prototype.clearHtmlNS = function(){
//   return this.replace(/<\/?.+?>|[\r\n\s]|(\ )/g,"");//.replace(/<\/?.+?>|[\r\n\s]|\&nbsp\;/g,"");
// }
// //去除HTML标签及空格（多个空格合并一个）、换行
// String.prototype.clearHtmlNS1 = function(){
//   return this.replace(/<\/?.+?>|[\r\n]/g,"").replace(/(\s)|(\&[nbsp]\;){2,}/g," ");//还有点问题没解决-----------------------------------
// }
// //去除HTML标签及换行
// String.prototype.clearHtmlN = function(){
//   return this.replace(/<\/?.+?>|[\r\n]/g,"");
// }
// //去除HTML标签保留空格、换行
// String.prototype.clearHtmlExpSN = function(){
//   return this.replace(/<\/?[^\/?(br)][^><]*>/ig,"");
// }
// //去除HTML标签所有属性
// String.prototype.clearAttr = function(){
//   return this.replace(/<([a-zA-Z1-7]+)\s*[^><]*>/g,"<$1>");
// }
// //用%26替换&
// String.prototype.replacePamCode=function(){
//   return this.replace(/[&]/ig,"%26");
// }
// //用^替换&
// String.prototype.replacePamCodeByArr=function(){
//   return this.replace(/[&]/ig,"^");
// }
// //用&替换^
// String.prototype.replaceArrByPamCode=function(){
//   return this.replace(/[\^]/ig,"&");
// }
// //用~替换=
// String.prototype.replaceEqualByWave=function(){
//   return this.replace(/[=]/ig,"~");
// }
// //用=替换~
// String.prototype.replaceWaveByEqual=function(){
//   return this.replace(/[~]/ig,"=");
// }
// //用%3d替换=
// String.prototype.replaceEqualCode=function(){
//   return this.replace(/[=]/ig,"%3d");
// }
//
// //获取字符串中的数字
// String.prototype.getNumber=function(){
//   return this.replace(/[^0-9.]/ig,"");
// }
//
// //是否为由数字组成的字符串
// function is_digitals(str){
//   var reg=/^[0-9]*$/;//匹配整数
//   return reg.test(str);
// }

//扩展trim(),ltrim(),rtrim()去除字符串两端空格
var trim = function(string){
  return string.replace(/(^\s*)|(\s*$)/g,"");
}

//去除字符串中间空格
var ctrim = function(string){
  return string.replace(/\s/g,'');
}
//扩展delHtmlTag()去除HTML标签及标签里面的文字
var delHtmlTag = function(string){
  return string.replace(/<[^>]+>/g,"");
}
//去除换行
var clearBr = function(string){
  return string.replace(/<\/br>/g,"").replace(/<br>/g,"").replace(/[\r\n]/g,"");
  //return string.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g,"");
}
//去除HTML标签
var clearHtml = function(string){
  //return string.replace(/<\/br>/g,"").replace(/<br>/g,"").replace(/[\r\n]/g,"");
  return string.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g,"");
}
//去除HTML标签及空格、换行
var clearHtmlNS = function(string){
  return string.replace(/<\/?.+?>|[\r\n\s]|(\ )/g,"");//.replace(/<\/?.+?>|[\r\n\s]|\&nbsp\;/g,"");
}
//去除HTML标签及空格（多个空格合并一个）、换行
var clearHtmlNS1 = function(string){
  return string.replace(/<\/?.+?>|[\r\n]/g,"").replace(/(\s)|(\&[nbsp]\;){2,}/g," ");//还有点问题没解决-----------------------------------
}
//去除HTML标签及换行
var clearHtmlN = function(string){
  return string.replace(/<\/?.+?>|[\r\n]/g,"");
}
//去除HTML标签保留空格、换行
var clearHtmlExpSN = function(string){
  return string.replace(/<\/?[^\/?(br)][^><]*>/ig,"");
}
//去除HTML标签所有属性
var clearAttr = function(string){
  return string.replace(/<([a-zA-Z1-7]+)\s*[^><]*>/g,"<$1>");
}
//用~替换= 用^替换& 转码成微信跳转链接
var enWxJumpLink = function(string){
  return string.replace(/[=]/ig,"~").replace(/[&]/ig,"^");
}
//用=替换~ 用&替换^ 解码成微信跳转链接
var deWxJumpLink = function(string){
  return string.replace(/[~]/ig,"=").replace(/[\^]/ig,"&");
}

//获取字符串中的数字
var getNumber = function(string){
  return string.replace(/[^0-9.]/ig,"");
}


//常用正则
// var pattern = {
//   any:/[\w\W]+/,
//   number:/^\d+$/,
//   string:/^[\u4E00-\u9FA5\uf900-\ufa2d\w\.\s]+$/,
//   postcode:/^[0-9]{6}$/,
//   url:/^(\w+:\/\/)?\w+(\.\w+)+.*$/,
//   username:/^[a-zA-Z0-9\_\-\.]{3,15}$/,
//   float:/^[0-9]+\.{0,1}[0-9]{0,2}$/,
//   email:/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
//   //mobile:/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|17[6|7|8]|18[0-9])\d{8}$/,
//   //mobile:/^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
//   mobile:/^1[3|4|5|7|8][0-9]\d{8,8}$/,
//   chinese:/^[\u4E00-\u9FA5\uf900-\ufa2d]$/,
//   tel:/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/,
//   qq:/^[1-9][0-9]{5,13}$/,
//   pass:/^(?![0-9\W\_]+$)(?![a-zA-Z\W\_]+$)[0-9a-zA-Z\W\_]{6,16}$/,
//   json:/^\{[\s\S]*\}$/,
//   arrjson:/^\[\{[\s\S]*\}\]$/,
//   array:/^\[[\s\S]*\]$/,
//   getjson:/[\s\S]*(\{[\s\S]*\})[\s\S]*/,
//   textarea:/[\u4e00-\u9fa5_a-zA-Z0-9\,\.\/\?\;\:\'\"\[\]\-\*\(\)\（\）\%\$\@\\\!\，\《\》\。\、\？\；\：\‘\’\“\”\…\￥\！]/,
//   repArticleHouse:/([\s\S]*)\{\{\{articleHouse\}\}\}([\s\S]*)/
// }


//是否为由数字组成的字符串
var isDigitals = function(str){
  var reg = /^[0-9]*$/;//匹配整数
  return reg.test(str);
}
// var replace = function(){
//   return {
//     //扩展trim(),ltrim(),rtrim()去除字符串两端空格
//     trim: function(string){
//       return string.replace(/(^\s*)|(\s*$)/g,"");
//     },
//     //去除字符串中间空格
//     ctrim: function(string){
//       return string.replace(/\s/g,'');
//     },
//     //扩展delHtmlTag()去除HTML标签及标签里面的文字
//     delHtmlTag: function(string){
//       return string.replace(/<[^>]+>/g,"");
//     },
//     //去除换行
//     clearBr: function(string){
//       return string.replace(/<\/br>/g,"").replace(/<br>/g,"").replace(/[\r\n]/g,"");
//       //return string.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g,"");
//     },
//     //去除HTML标签
//     clearHtml: function(string){
//       //return string.replace(/<\/br>/g,"").replace(/<br>/g,"").replace(/[\r\n]/g,"");
//       return string.replace(/<\/?.+?>/g,"").replace(/[\r\n]/g,"");
//     },
//     //去除HTML标签及空格、换行
//     clearHtmlNS: function(string){
//       return string.replace(/<\/?.+?>|[\r\n\s]|(\ )/g,"");//.replace(/<\/?.+?>|[\r\n\s]|\&nbsp\;/g,"");
//     },
//     //去除HTML标签及空格（多个空格合并一个）、换行
//     clearHtmlNS1: function(string){
//       return string.replace(/<\/?.+?>|[\r\n]/g,"").replace(/(\s)|(\&[nbsp]\;){2,}/g," ");//还有点问题没解决-----------------------------------
//     },
//     //去除HTML标签及换行
//     clearHtmlN: function(string){
//       return string.replace(/<\/?.+?>|[\r\n]/g,"");
//     },
//     //去除HTML标签保留空格、换行
//     clearHtmlExpSN: function(string){
//       return string.replace(/<\/?[^\/?(br)][^><]*>/ig,"");
//     },
//     //去除HTML标签所有属性
//     clearAttr: function(string){
//       return string.replace(/<([a-zA-Z1-7]+)\s*[^><]*>/g,"<$1>");
//     },
//     //用%26替换&
//     // replacePamCode: function(string){
//     //   return string.replace(/[&]/ig,"%26");
//     // },
//     //用^替换&
//     // replacePamCodeByArr: function(string){
//     //   return string.replace(/[&]/ig,"^");
//     // },
//     //用&替换^
//     // replaceArrByPamCode: function(string){
//     //   return string.replace(/[\^]/ig,"&");
//     // },
//     //用~替换=
//     // replaceEqualByWave: function(string){
//     //   return string.replace(/[=]/ig,"~");
//     // },
//     //用=替换~
//     // replaceWaveByEqual: function(string){
//     //   return string.replace(/[~]/ig,"=");
//     // },
//     //用%3d替换=
//     // replaceEqualCode: function(string){
//     //   return string.replace(/[=]/ig,"%3d");
//     // },
//     //用~替换= 用^替换& 转码成微信跳转链接
//     enWxJumpLink: function(string){
//       return string.replace(/[=]/ig,"~").replace(/[&]/ig,"^");
//     },
//     //用=替换~ 用&替换^ 解码成微信跳转链接
//     deWxJumpLink: function(string){
//       return string.replace(/[~]/ig,"=").replace(/[\^]/ig,"&");
//     },
//
//     //获取字符串中的数字
//     getNumber: function(string){
//       return string.replace(/[^0-9.]/ig,"");
//     },
//
//     //是否为由数字组成的字符串
//     isDigitals: function(str){
//       var reg = /^[0-9]*$/;//匹配整数
//       return reg.test(str);
//     }
//   }
// }

// /**
//  * 获取手机系统版本
//  * @param osName {String} 系统类型字符串Android、iPod、iWatch或iPhone
//  * @param withosstr {Boolean} 是否需要带上名称
//  * @param userAgent {String} ua，可不传，默认取navigator.appVersion
//  * @return {Boolean/null} null/true/false
//  */
// function getOsVersion(osName, withosstr, userAgent) {
//   userAgent = userAgent || navigator.appVersion
//   var d = ['iPhone', 'iPad', 'iPod', 'iWatch', 'Mac', 'iMac', 'iOS'], name = osName, index = d.indexOf(osName)
//   if (index > -1 && userAgent.indexOf('like Mac OS X') > -1) {
//     name = 'OS'
//   }
//   var reg = eval("/" + name + "\\s[\\d\\_]+/");
//   var isApp = userAgent.includes(name);
//   var ver = (userAgent.match(reg, "ig") + '').replace(/\s/ig, '/').replace(/_/ig, '.');
//   if (index > -1) {
//     ver = ver.replace(/OS\//ig, osName + '/')
//   }
//   // console.log(userAgent, reg)
//   // console.log(ver)
//   return getAppVersion(osName, withosstr, ver)
// }

// /**
//  * 获取APP版本号
//  * @param appName {String} app名称
//  * @param withosstr {Boolean} 是否需要带上名称
//  * @param userAgent {String} ua，可不传，默认取navigator.appVersion
//  * @return {Boolean/null} null/true/false
//  */
// function getAppVersion(appName, withappstr, userAgent) {
//   // console.log(getAppVersion("Chrome"));
//   // const userAgent = navigator.userAgent;
//   userAgent = userAgent || navigator.appVersion
//   var reg = eval("/" + appName + "\\/([\\d\\.]+)/");
//   var isApp = userAgent.includes(appName);
//   var ver = userAgent.match(reg, "i");
//   // console.log(userAgent)
//   // console.log(ver)
//   // withappstr = typeof(withappstr) != "undefined" ? withappstr : false;
//   if (ver) {
//     if (withappstr) {
//       //需要带上app名称，完整输出
//       return ver ? ver[0] : "";
//     } else {
//       return ver ? ver[1] : "";
//     }
//   } else {
//     if (isApp) {
//       //是指定客户端但是版本号未知
//       console.log(appName + "\u672A\u77E5\u7248\u672C\u53F7");
//       return false;
//     } else {
//       //不是指定客户端
//       console.log(appName + "\u4E0D\u5B58\u5728");
//       return null;
//     }
//   }
// }

// /**
//  * 版本号大小对比
//  * @param appName {String} app名称
//  * @param compareVer {String} 必传 需要对比的版本号
//  * @param userAgent {String} ua，可不传，默认取navigator.appVersion
//  * @return {Boolean/null} null/true/false
//  */
// function getIsAppVersionLastest(appName, compareVer, userAgent) {
//   //console.log(getIsAppVersionLastest("Chrome","5.1"));
//   userAgent = userAgent || navigator.appVersion
//   var basicVer = appName.indexOf(".") > 0 ? appName : getAppVersion(appName, false, userAgent); //兼容getIsAppVersionLastest("1.2.2","1.2.3")直接传入版本号的对比
//   // var basicVer = "5.1.";
//   if (basicVer === null) {
//     return null;
//   } //不是指定客户端
//   if (basicVer === false) {
//     return false;
//   } //是指定客户端但是版本号未知
//   basicVer = basicVer + ".";
//   compareVer = compareVer + ".";
//   var bStr = parseFloat(basicVer);
//   var cStr = parseFloat(compareVer);
//   var bStrNext = parseFloat(basicVer.replace(bStr + ".", "")) || 0;
//   var cStrNext = parseFloat(compareVer.replace(cStr + ".", "")) || 0;
//   // console.log(bStr + "-" + cStr)
//   // console.log(basicVer.replace(bStr + ".","") + "-" + compareVer.replace(cStr + ".",""))
//   // console.log(bStrNext + "-" + cStrNext)
//   if (cStr > bStr) {
//     return false;
//   } else if (cStr < bStr) {
//     return true;
//   } else {
//     if (bStrNext >= cStrNext) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }


//获取滑动到顶部和底部 返回'top' 'bottom'
var getScrollPosition = function(){
  var innerH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  var docScrollTop = document.documentElement.scrollTop;
  var bodyScrollTop = document.body.scrollTop;
  var docScrollHeight = document.documentElement.scrollHeight;
  var bodyScrollHeight = document.body.scrollHeight;
  var scrollT = 0, scrollH = 0;
  if(docScrollTop === 0){
    scrollT = bodyScrollTop;
    scrollH = bodyScrollHeight;
    if(bodyScrollTop === 0){
      return 'top';
    }
  }else{
    scrollT = docScrollTop;
    scrollH = docScrollHeight;
  }
  // if(bodyScrollTop === 0 && docScrollTop === 0){
  //   return 'top';
  // }
  if(innerH + Math.floor(scrollT) === scrollH || innerH + Math.ceil(scrollT) === scrollH){
    return 'bottom';
  }
}

//扩展图片自动适应多种分辨率small original
var imgadapt = function imgadapt(imgurl, size) {
  if (!imgurl) {
    return "";
  }
  var imgPre = "";
  var urlReg = new RegExp("(.jpg|.png|.gif|.jpeg|.bmp|.webx)$", "i");
  var preReg = new RegExp("([.small|.original].jpg|.png|.gif|.jpeg|.bmp|.webx)$", "i"); //匹配.small.jpg .original.jpg
  switch (size) {
    case "s":
      imgPre = ".small";return imgurl.replace(urlReg, "$1" + imgPre + "$1");break;
    case "m":
      imgPre = "";return imgurl.replace(urlReg, "$1" + imgPre);break;
    case "l":
      imgPre = ".original";return imgurl.replace(urlReg, "$1" + imgPre + "$1");break;
    default:
      return imgurl;break;
  }
  //	return this.replace(preReg,"").replace(urlReg,"$1" + imgPre + "$1");
  //return this.replace(urlReg,"$1" + imgPre + "$1");
};
//扩展图片自动适应多种分辨率@2x @3x
var imgchoose = function imgchoose(imgurl) {
  var width = window.innerWidth;
  var imgPre = "";
  var urlReg = new RegExp("(.jpg|.png|.gif|.jpeg|.bmp)", "i");
  var preReg = new RegExp("(@[2|3]x)", "i"); //匹配@2x @3x
  if (width >= 480) {
    imgPre = "@3x";
  } else if (width >= 320) {
    imgPre = "@2x";
  } else if (width >= 240) {
    imgPre = "";
  }
  return imgurl.replace(preReg, "").replace(urlReg, imgPre + "$1");
};
/* 扩展图片自动适应多种分辨率@2x @3x */
/*function imgtagadapt(){
  const img = $("img.imgchoose");
  img.each(function(){
    const imgurl = $(this).prop("src");
    const lazyurl = $(this).attr("data-original");
    $(this).prop("src",imgurl.imgchoose());
    if(lazyurl != "" && lazyurl != null){
      $(this).attr("data-original",lazyurl.imgchoose());
    };
  });
}
imgtagadapt();*/

//日期格式化插件
//使用方式：var date1 = new Date().format("yyyy-MM-dd");
var formatTime = function formatTime(time, fmt) {
  if (typeof time === "string") {
    time = new Date(time);
  }
  var o = {
    "M+": time.getMonth() + 1, //月份
    "d+": time.getDate(), //日
    "h+": time.getHours(), //小时
    "m+": time.getMinutes(), //分
    "s+": time.getSeconds(), //秒
    "q+": Math.floor((time.getMonth() + 3) / 3), //季度
    "S": time.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, ("" + time.getFullYear()).substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }return fmt;
};

//格式化成：刚刚、几分钟前。。。
function formatTimeStr(time, fmt) {
  var now = new Date().getTime();
  var format = fmt != "" && fmt != null ? fmt : "MM-dd";
  var old = time;
  if (!old || old < 1) {
    return;
  }
  var t = now - old;
  var newTimeStr = "";
  if (t < 60 * 2) {
    newTimeStr = "刚刚";
  } else if (t < 60 * 60) {
    newTimeStr = parseInt(t / 60) + "\u5206\u949F\u524D";
  } else if (t < 60 * 60 * 24) {
    newTimeStr = parseInt(t / (60 * 60)) + "\u5C0F\u65F6\u524D";
  } else if (t < 60 * 60 * 24 * 30) {
    newTimeStr = parseInt(t / (60 * 60 * 24)) + "\u5929\u524D";
  } else {
    newTimeStr = new Date(old).format(format);
  }
  return newTimeStr;
}
// end JS重要功能扩展================


/* 阻止默认事件 */
function stopDefault(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  } else {
    window.event.returnValue = false;
  };
  return false;
};

/* 阻止冒泡 */
function stopBubble(e) {
  if (e && e.preventDefault) {
    // Firefox
    e.stopPropagation(); //e.preventDefault();
  } else {
    // IE
    evt.cancelBubble = true; //evt.returnValue = false;
  };
  return false;
};

/* 获取URL参数 */
/*function getUrlParam(url){
	var urlStr = url != "" && url != null ? url.substr(url.indexOf("?")) : location.search;//获取url中"?"符后的字串
	var urlParam = [];
	if(urlStr.indexOf("?") != -1){
		var str = urlStr.substr(1);
		var strs = str.split("&");
		for(var i = 0;i < strs.length;i++){
			//urlParam[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			urlParam[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
		};
	};
	return urlParam;
}*/

/* 获取URL参数 */
// function getUrlParam(url) {
//   var urlStr = url != "" && typeof url != "undefined" ? url.substr(url.indexOf("?")) : location.search; //获取url中"?"符后的字串
//   var urlParam = [];
//   if (urlStr.includes("?")) {
//     var str = urlStr.substr(1);
//     var strs = str.split("&");
//     for (var i = 0; i < strs.length; i++) {
//       //urlParam[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
//       urlParam[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
//     };
//   };
//   return urlParam;
// }
// function getUrlParam(url) {
//   // url = (url != "" && typeof url != "undefined") ? url.substr(url.indexOf("?")) : location.search; //获取url中"?"符后的字串
//   var reg_url = /^[^\?]+\?([\w\W]+)$/,
//     reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
//     arr_url = reg_url.exec(url),
//     ret = {};
//   if (arr_url && arr_url[1]) {
//     var str_para = arr_url[1], result;
//     while ((result = reg_para.exec(str_para)) != null) {
//       ret[result[1]] = result[2];
//     }
//   }
//   return ret;
// }
function getUrlParam(url) {
  url = (url !== "" && typeof url !== "undefined") ? url.substr(url.indexOf("?")).split('#')[0] : location.search; //获取url中"?"符后的字串
  var search = url.substring(url.lastIndexOf("?") + 1);
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
//console.log(getUrlParam(location.href))

/* 获取单个URL参数 */
function getParameter(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);return null;
}
//console.log(getParameter("pon"))

/* 获取目录形式URL参数 */
function getDirParam(url) {
  var patt = new RegExp(/^http[s]?:\/\/[^\/]+([\s\S]*)/);
  var urlStr = url != "" && typeof url != "undefined" ? url.replace(patt, "$1") : location.pathname; //获取url中域名后的字串:/post/0703/a1.html
  urlStr = urlStr.replace(/^\//, "");
  var dirParam = {};
  dirParam.host = url != "" && typeof url != "undefined" ? url.match(/^http[s]?:\/\/[^\/]+/)[0] : location.host; //获取域名，包含http://
  if (urlStr.includes("/")) {
    //dirParam = unescape(urlStr).split("/");
    dirParam.path = decodeURI(urlStr).split("/");
  };
  //console.log(JSON.stringify(dirParam))
  return dirParam; //{"host":"http://192.168.2.243:7004","path":["media","video","chidaoyan.mp4"]}
}
//console.log(getDirParam("http://192.168.2.243:7004/post/0703/a1.html"))

/* 获取字符串形式URL参数 /post-07-03-a1.html*/
function getStrParam(url) {
  var chr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "-";

  var patt = new RegExp(/^http[s]?:\/\/[^\/]+[\s\S]*(\/[\s\S]*)\.[\s\S]*/);
  var urlStr = url != "" && typeof url != "undefined" ? url.replace(patt, "$1") : location.pathname; //获取url中域名后的字串:/post/0703/a1.html
  urlStr = urlStr.replace(/^\//, "");
  //console.log(urlStr)
  var dirParam = {};
  dirParam.host = url != "" && typeof url != "undefined" ? url.match(/^http[s]?:\/\/[^\/]+/)[0] : location.host; //获取域名，包含http://
  if (urlStr.includes(chr)) {
    //dirParam = unescape(urlStr).split("/");
    dirParam.path = decodeURI(urlStr).split(chr);
  }
  //console.log(JSON.stringify(dirParam))
  return dirParam; //{"host":"http://192.168.2.243:7004","path":["media","video","chidaoyan.mp4"]}
}
//console.log(getStrParam("http://192.168.2.243:7004/post/0703/a1-66_778-gfgf.html"))

/* 文件后缀名 */
function getFileType(url) {
  if (typeof url != "string" || url == "") {
    return false;
  }
  var type = /\.[^\.]+$/.exec(url); //[".docx", index: 31, input: "http://192.168.2.243:7005/doc/2.docx"]
  return type[0].toLowerCase();
}

/* 获取文本长度，中文算2个字节 */
function getCHSLength(str) {
  var chineseRegex = /[^\x00-\xff]/g;
  var strLength = str.replace(chineseRegex, "**").length;
  return strLength;
}
/* 截取字符串，中文算2个字节 */
function cutCHSString(str, len, hasDot) {
  if (str == "" || !str) {
    return "";
  } else {
    var newLength = 0;
    var newStr = "";
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = "";
    var strLength = str.replace(chineseRegex, "**").length;
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
      newStr += "...";
    }
    return newStr;
  }
}

//是否存在指定函数
function isExitsFunction(funcName) {
  try {
    if (typeof eval(funcName) == "function") {
      return true;
    }
  } catch (e) {}
  return false;
}

//是否存在指定变量
function isExitsVariable(variableName) {
  try {
    if (typeof variableName == "undefined") {
      //alert("value is undefined");
      return false;
    } else {
      //alert("value is true");
      return true;
    }
  } catch (e) {}
  return false;
}

function hasClass(dom, className) {
  //模仿jquery的hasClass方法，判断是否有某个样式
  className = className.replace(/^\s|\s$/g, "");
  return (" " + ((dom || {}).className || "").replace(/\s/g, " ") + " ").includes(" " + className + " ");
}

//获取字符串长度，中文算2个字符
var getStrLen = function getStrLen(str) {
  var realLength = 0;
  var len = str.length;
  var charCode = -1;
  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) {
      realLength += 1;
    } else {
      realLength += 2;
    }
  }
  return realLength;
};
/**
 * js截取字符串，中英文都能用
 * @param str：需要截取的字符串
 * @param len: 需要截取的长度
 */
function cutStrLen(str, len) {
  var str_length = 0;
  //var a = 0;
  var str_len = str.length;
  var str_cut = new String();
  for (var i = 0; i < str_len; i++) {
    a = str.charAt(i);
    str_length++;
    if (escape(a).length > 4) {
      //中文字符的长度经编码之后大于4
      str_length++;
    }
    str_cut = str_cut.concat(a);
    if (str_length >= len) {
      str_cut = str_cut.concat("...");
      return str_cut;
    }
  }
  //如果给定字符串小于指定长度，则返回源字符串；
  if (str_length < len) {
    return str;
  }
}

//获取浏览器窗口大小------------------------------------------------------
function saWindowHeight() {
  var screen_height = 0; //获取窗口高度
  if (window.innerHeight) {
    screen_height = window.innerHeight;
  } else if (document.body && document.body.clientHeight) {
    screen_height = document.body.clientHeight;
  }; //通过深入Document内部对body进行检测，获取窗口大小
  if (document.documentElement && document.documentElement.clientHeight) {
    screen_height = document.documentElement.clientHeight;
  }; //var screen_height = document.documentElement.clientHeight;
  return screen_height;
};
function saWindowWidth() {
  var screen_width = 0; //获取窗口宽度
  if (window.innerWidth) {
    screen_width = window.innerWidth;
  } else if (document.body && document.body.clientWidth) {
    screen_width = document.body.clientWidth;
  }; //通过深入Document内部对body进行检测，获取窗口大小
  if (document.documentElement && document.documentElement.clientWidth) {
    screen_width = document.documentElement.clientWidth;
  }; //var screen_width = document.documentElement.clientWidth;
  return screen_width;
};
//end获取浏览器窗口大小=================


//start cookis操作------------------------------------------------------
function setCache ($key, $value, $expire) {
  var object = {
    value: $value,
    timestamp: $expire && (parseInt($expire) + new Date().getTime()) || '0'
  };
  localStorage.setItem($key, JSON.stringify(object));
};
function getCache ($key) {
  var cache = localStorage.getItem($key);
  if (cache) {
    var object = JSON.parse(localStorage.getItem($key)),
      dateString = object.timestamp,
      now = new Date().getTime().toString();
    if (dateString != '0' && now > dateString) {
      localStorage.removeItem($key);
      return null;
    }
    return object.value;
  } else return null;
};
function clearCache ($key) {
  localStorage.removeItem($key);
};
//写sessionStorage
function setSessionStorage(name, value, time) {
  var strsec = getsec(time);
  var exp = new Date();
  var expires = strsec ? exp.getTime() + (strsec*1000) : "";
  var obj = {};
  obj.value = value;
  obj.expires = expires;
  obj = encodeURIComponent(JSON.stringify(obj));
  sessionStorage.setItem(name, obj);
};
//读取sessionStorage
function getSessionStorage(name) {
  var str = sessionStorage.getItem(name);
  var exp = new Date();
  if (str) {
    var obj = JSON.parse(decodeURIComponent(str));
    if (!obj.hasOwnProperty("value") || !obj.hasOwnProperty("expires")) {
      return null;
    } else {
      if (!obj.expires || obj.expires > exp.getTime()) {
        return obj.value;
      } else {
        sessionStorage.removeItem(name);
        return null;
      }
    }
    //return (obj.expires > exp.getTime() ? obj.value : null);
  } else {
    return null;
  };
};
//删除sessionStorage
function delSessionStorage(name) {
  sessionStorage.removeItem(name);
};
//写localStorage
function setLocalStorage(name, value, time) {
  var strsec = getsec(time);
  var exp = new Date();
  var expires = strsec ? exp.getTime() + (strsec*1000) : "";
  var obj = {};
  obj.value = value;
  obj.expires = expires;
  obj = encodeURIComponent(JSON.stringify(obj));
  localStorage.setItem(name, obj);
};
//读取localStorage
function getLocalStorage(name) {
  var str = localStorage.getItem(name);
  var exp = new Date();
  if (str) {
    var obj = JSON.parse(decodeURIComponent(str));
    if (!obj.hasOwnProperty("value") || !obj.hasOwnProperty("expires")) {
      return null;
    } else {
      if (!obj.expires || obj.expires > exp.getTime()) {
        return obj.value;
      } else {
        localStorage.removeItem(name);
        return null;
      }
    }
    //return (obj.expires > exp.getTime() ? obj.value : null);
  } else {
    return null;
  };
};
//删除localStorage
function delLocalStorage(name) {
  localStorage.removeItem(name);
};
//写cookies
function setCookie(name, value, time, useLocalStorage) {
  useLocalStorage = (typeof(useLocalStorage) !== 'undefined' ? useLocalStorage : true);
  var strsec = getsec(time);
  var exp = new Date();
  var expires = strsec ? exp.getTime() + strsec : "";
  var obj = {};
  obj.value = value;
  obj.expires = expires;
  obj = encodeURIComponent(JSON.stringify(obj));
  if (window.localStorage && useLocalStorage) {
    localStorage.setItem(name, obj);
  } else {
    strsec = strsec ? strsec : 2592000000; //没有设定时间的默认30天
    // var strsec = getsec(time);
    // var exp = new Date();
    // value = (typeof(value) == "object" ? JSON.stringify(value) : value);
    exp.setTime(exp.getTime() + strsec);
    document.cookie = name + "=" + obj + ";expires=" + exp.toGMTString() + ";path=/";
  }
};
//读取cookies
function getCookie(name, useLocalStorage) {
  useLocalStorage = (typeof(useLocalStorage) !== 'undefined' ? useLocalStorage : true);
  if (window.localStorage && useLocalStorage) {
    var str = localStorage.getItem(name);
    var exp = new Date();
    if (str) {
      var obj = JSON.parse(decodeURIComponent(str));
      if (!obj.hasOwnProperty("value") || !obj.hasOwnProperty("expires")) {
        return null;
      } else {
        if (!obj.expires || obj.expires > exp.getTime()) {
          return obj.value;
        } else {
          localStorage.removeItem(name);
          return null;
        }
      }
      //return (obj.expires > exp.getTime() ? obj.value : null);
    } else {
      return null;
    };
  } else {
    var arr = void 0;
    var reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      var obj = JSON.parse(decodeURIComponent(arr[2]));
      if (!obj.hasOwnProperty("value") || !obj.hasOwnProperty("expires")) {
        return null;
      } else {
        return obj.value;
      }
    } else {
      return null;
    }
  }
};
//删除cookies
function delCookie(name, useLocalStorage) {
  useLocalStorage = (typeof(useLocalStorage) !== 'undefined' ? useLocalStorage : true);
  if (window.localStorage && useLocalStorage) {
    localStorage.removeItem(name);
  } else {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null) {
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
    }
  }
};
//程序代码
function getsec(str) {
  if (!str) {
    return "";
  } else {
    var str1 = str.substring(1, str.length) * 1;
    var str2 = str.substring(0, 1);
    if (str2 == "s") {
      return str1 * 1000;
    } else if (str2 == "h") {
      return str1 * 60 * 60 * 1000;
    } else if (str2 == "d") {
      return str1 * 24 * 60 * 60 * 1000;
    };
  }
};
//这是有设定过期时间的使用示例：
//s20是代表20秒
//h是指小时，如12小时则是：h12
//d是天数，30天则：d30
//end cookis操作------------------------------------------------------



//获取随机数
var getRandomNum = function (min,max) {
  min = min || 1;
  max = max || 10;
  var Range = max - min;
  var Rand = Math.random();
  return(min + Math.round(Rand*Range));
};


//获取随机字符串
var getRandomStr = function(len){
  len = len || 32;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; //默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  //var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var maxPos = chars.length;
  var str = '';
  for(i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
};

//获取随机字符串带特殊符号
var getRandomStrWidthSpecialChar = function(len){
  len = len || 32;
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678~!@#$^&*_+=-.'; //默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  //var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var maxPos = chars.length;
  var str = '';
  for(i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return str;
};

// 字符串、数字转base64
var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var encodeBase64 = function (input) {
  var output = "";
  var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  var i = 0;
  input = encodeUtf8(input);
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output +
      _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
      _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
  }
  return output;
};

// base64解码
var decodeBase64 = function (input) {
  var output = "";
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0;
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
  while (i < input.length) {
    enc1 = _keyStr.indexOf(input.charAt(i++));
    enc2 = _keyStr.indexOf(input.charAt(i++));
    enc3 = _keyStr.indexOf(input.charAt(i++));
    enc4 = _keyStr.indexOf(input.charAt(i++));
    chr1 = (enc1 << 2) | (enc2 >> 4);
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
    chr3 = ((enc3 & 3) << 6) | enc4;
    output = output + String.fromCharCode(chr1);
    if (enc3 != 64) {
      output = output + String.fromCharCode(chr2);
    }
    if (enc4 != 64) {
      output = output + String.fromCharCode(chr3);
    }
  }
  output = decodeUtf8(output);
  return output;
};

// 编码Utf8
var encodeUtf8 = function (string) {
  string = string.replace(/\r\n/g, "\n");
  var utftext = "";
  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n);
    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if ((c > 127) && (c < 2048)) {
      utftext += String.fromCharCode((c >> 6) | 192);
      utftext += String.fromCharCode((c & 63) | 128);
    } else {
      utftext += String.fromCharCode((c >> 12) | 224);
      utftext += String.fromCharCode(((c >> 6) & 63) | 128);
      utftext += String.fromCharCode((c & 63) | 128);
    }

  }
  return utftext;
}

// 解码Utf8
var decodeUtf8 = function (utftext) {
  var string = "";
  var i = 0;
  var c = c1 = c2 = 0;
  while (i < utftext.length) {
    c = utftext.charCodeAt(i);
    if (c < 128) {
      string += String.fromCharCode(c);
      i++;
    } else if ((c > 191) && (c < 224)) {
      c2 = utftext.charCodeAt(i + 1);
      string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
      i += 2;
    } else {
      c2 = utftext.charCodeAt(i + 1);
      c3 = utftext.charCodeAt(i + 2);
      string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    }
  }
  return string;
}

/**
* 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
* @param fn {function}  需要调用的函数
* @param delay  {number}    延迟时间，单位毫秒
* @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
* @return {function}实际调用函数
*/
var throttle = function (fn, delay, immediate, debounce) {
  var curr = +new Date(), //当前事件
    last_call = 0,
    last_exec = 0,
    timer = null,
    diff, //时间差
    context, //上下文
    args,
    exec = function () {
      last_exec = curr
      fn.apply(context, args)
    }
  return function () {
    curr = +new Date()
      ; (context = this), (args = arguments), (diff = curr - (debounce ? last_call : last_exec) - delay)
    clearTimeout(timer)
    if (debounce) {
      if (immediate) {
        timer = setTimeout(exec, delay)
      } else if (diff >= 0) {
        exec()
      }
    } else {
      if (diff >= 0) {
        exec()
      } else if (immediate) {
        timer = setTimeout(exec, -diff)
      }
    }
    last_call = curr
  }
}

/**
* 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
* @param fn {function}  要调用的函数
* @param delay   {number}    空闲时间
* @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
* @return {function}实际调用函数
*/
var debounce = function (fn, delay, immediate) {
  return throttle(fn, delay, immediate, true)
}


//生成二维码
// var getQrCode = function(obj,url,data,isshort){
//   //console.log(isshort)
//   if(obj[0] && typeof(obj) == "object"){
//     obj = obj.get(0);
//   }else if(typeof(obj) == "string"){
//     obj = document.getElementById(obj);
//   };
//   isshort = typeof(isshort) != "undefined" ? isshort : false;
//   data = typeof(data) != "object" ? {} : data;
//   var defaults = {width:100,height:100,colorDark:"#333333",colorLight:"#ffffff",correctLevel:QRCode.CorrectLevel.H};
//   var options = $.extend({},defaults,data);
//   console.log(options)
//   var qrcode = new QRCode(obj,options);
//   if(isshort){
//     saFun.getShortUrl(url,function(sUrl){qrcode.makeCode(sUrl);});//短网址
//   }else{
//     qrcode.makeCode(url);
//   }
// };

/**
 * textarea或input对象在指定的光标位置插入文字
 * @param  {Object} obj dom对象
 * @param  {String} str 要插入的文字
 */
var textareaInsertText = function (obj, str) {
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
    setTimeout(function() {
      obj.selectionStart = obj.selectionEnd = curPos;
    }, 0);
  } else {
    obj.value += str;
  }
}

/**
 * textarea或input对象将光标定位到文字尾部
 * @param  {Object} obj dom对象
 */
function textareaMoveToEnd(obj) {
  obj.focus();
  var len = obj.value.length;
  if (document.selection) {
    var sel = obj.createTextRange();
    sel.moveStart('character', len);
    sel.collapse();
    sel.select();
  } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
    obj.selectionStart = obj.selectionEnd = len;
  }
}


























//
// exports.client = client;
// /*exports.client = function(){
//     return client
// };*/
//
// /**
// * 获取APP版本信息
// * 依赖：userAgent
// * 参数：
// * appName:"Chrome"
// * withappstr:false (可选参数，默认false，false -> "1.0.0";true -> "Chrome/1.0.0")
// * userAgent: "ua字符串，使用中间件获取，方法如下
// *   async asyncData({ userAgent }) {
// *     return { userAgent }
// *   }"
// * 返回：
// * string -> "1.0.0"
// *           "Chrome/1.0.0"
// *           null 不是指定的客户端，app识别符没找到
// *           false 是指定客户端但是没有查到版本号，也就是ua格式不符合“Chrome/1.0.0”这种形式
// *
// * */
// exports.getAppVersion = getAppVersion;
//
// /**
// * 获取当前APP版本是否大于预定版本
// * 依赖：[ getAppVersion ]
// * 参数：
// * appName:"Chrome"
// * compareVer："1.0.0"
// * userAgent: "ua字符串，使用中间件获取，方法如下
// *   async asyncData({ userAgent }) {
// *     return { userAgent }
// *   }"
// * 返回：
// * boolean -> true 当前版本是更新版
// *            false 当前版本不是更新版
// *            null 当前客户端不是指定客户端
// *
// * */
// exports.getIsAppVersionLastest = getIsAppVersionLastest;
//
// /**
// * 扩展图片自动适应多种分辨率small original
// * 依赖：无
// * 参数:
// * imgurl:"http://a.com/a.jpg"
// * size:"s"("s" -> 小图,"m" -> 中图,"l" -> 大图)
// * 返回：
// * string -> "http://a.com/a.jpg.small" 小图
// *           "http://a.com/a.jpg" 中图
// *           "http://a.com/a.jpg.original" 大图
// * */
// // exports.imgadapt = imgadapt(imgurl,size);
// exports.imgadapt = imgadapt;
//
// /**
// * 扩展图片自动适应多种分辨率@2x @3x
// * 依赖：无
// * 参数:
// * imgurl:"http://a.com/a.jpg" or "http://a.com/a@2x.jpg"
// * 返回：
// * string -> "http://a.com/a.jpg" 屏幕宽度>=240
// *           "http://a.com/a@2x.jpg" 屏幕宽度>=320
// *           "http://a.com/a@3x.jpg" 屏幕宽度>=480
// * */
// // exports.imgchoose = imgchoose(imgurl);
// exports.imgchoose = imgchoose;
// //
// //
// //
// // exports.formatTime = formatTime(time,fmt);
// exports.formatTime = formatTime;
// //
// //
// //
// // exports.formatTimeStr = formatTimeStr(time,fmt);
// exports.formatTimeStr = formatTimeStr;
// //
// //
// //
// // exports.stopDefault = stopDefault(event);
// exports.stopDefault = stopDefault;
// //
// //
// //
// // exports.stopBubble = stopBubble(event);
// // exports.getUrlParam = getUrlParam(url);
// // exports.getParameter = getParameter(name);
// // exports.getDirParam = getDirParam(url);
// // exports.getStrParam = getStrParam(url,chr);
// // exports.getFileType = getFileType(url);
// // exports.getCHSLength = getCHSLength(str);
// // exports.cutCHSString = cutCHSString(str,len,hasDot);
// // exports.isExitsFunction = isExitsFunction(funcName);
// // exports.isExitsVariable = isExitsVariable(variableName);
// // exports.hasClass = hasClass(dom,className);
// // exports.getStrLen = getStrLen(str);
// // exports.cutStrLen = cutStrLen(str,len);
// // exports.saWindowHeight = saWindowHeight();
// // exports.saWindowWidth = saWindowWidth();
// //
// // exports.setSessionStorage = setSessionStorage(name,value,time);
// // exports.getSessionStorage = getSessionStorage(name);
// // exports.delSessionStorage = delSessionStorage(name);
// // exports.setLocalStorage = setLocalStorage(name,value,time);
// // exports.getLocalStorage = getLocalStorage(name);
// // exports.delLocalStorage = delLocalStorage(name);
// // exports.setCookie = setCookie(name,value,time);
// // exports.getCookie = getCookie(name);
// // exports.delCookie = delCookie(name);
// // exports.getsec = getsec(str);
//
//
// // exports.stopBubble = stopBubble;
// // exports.getUrlParam = getUrlParam;
// // exports.getParameter = getParameter;
// // exports.getDirParam = getDirParam;
// // exports.getStrParam = getStrParam;
// // exports.getFileType = getFileType;
// // exports.getCHSLength = getCHSLength;
// // exports.cutCHSString = cutCHSString;
// // exports.isExitsFunction = isExitsFunction;
// // exports.isExitsVariable = isExitsVariable;
// // exports.hasClass = hasClass;
// // exports.getStrLen = getStrLen;
// // exports.cutStrLen = cutStrLen;
// // exports.saWindowHeight = saWindowHeight;
// // exports.saWindowWidth = saWindowWidth;
// //
// // exports.setSessionStorage = setSessionStorage;
// // exports.getSessionStorage = getSessionStorage;
// // exports.delSessionStorage = delSessionStorage;
// // exports.setLocalStorage = setLocalStorage;
// // exports.getLocalStorage = getLocalStorage;
// // exports.delLocalStorage = delLocalStorage;
// // exports.setCookie = setCookie;
// // exports.getCookie = getCookie;
// // exports.delCookie = delCookie;
// // exports.getsec = getsec;


// module.exports = {
//   indexOf,
//   contains,
//   append,
//   remove,
//   //event方法kuozhan
//   addEvent,
//   removeEvent,
//   // handleEvent,
//   // fixEvent,

//   client,
//   //扩展trim(),ltrim(),rtrim()去除字符串两端空格
//   trim,
//   //去除字符串中间空格
//   ctrim,
//   //扩展delHtmlTag()去除HTML标签及标签里面的文字
//   delHtmlTag,
//   //去除换行
//   clearBr,
//   //去除HTML标签
//   clearHtml,
//   //去除HTML标签及空格、换行
//   clearHtmlNS,
//   //去除HTML标签及空格（多个空格合并一个）、换行
//   clearHtmlNS1,
//   //去除HTML标签及换行
//   clearHtmlN,
//   //去除HTML标签保留空格、换行
//   clearHtmlExpSN,
//   //去除HTML标签所有属性
//   clearAttr,
//   //用~替换= 用^替换& 转码成微信跳转链接
//   enWxJumpLink,
//   //用=替换~ 用&替换^ 解码成微信跳转链接
//   deWxJumpLink,
//   //获取字符串中的数字
//   getNumber,
//   //是否为由数字组成的字符串
//   isDigitals,

//   pattern,
//   getAppVersion,
//   getIsAppVersionLastest,
//   getScrollPosition,
//   imgadapt,
//   imgchoose,
//   formatTime,
//   formatTimeStr,
//   stopDefault,
//   stopBubble,
//   getUrlParam,
//   getParameter,
//   getDirParam,
//   getStrParam,
//   getFileType,
//   getCHSLength,
//   cutCHSString,
//   isExitsFunction,
//   isExitsVariable,
//   hasClass,
//   getStrLen,
//   cutStrLen,
//   saWindowHeight,
//   saWindowWidth,

//   setCache,
//   getCache,
//   clearCache,
//   setSessionStorage,
//   getSessionStorage,
//   delSessionStorage,
//   setLocalStorage,
//   getLocalStorage,
//   delLocalStorage,
//   setCookie,
//   getCookie,
//   delCookie,
//   getsec,


//   getRandomNum,
//   getRandomStr,
//   getRandomStrWidthSpecialChar,

//   encodeBase64,
//   decodeBase64,
//   encodeUtf8,
//   decodeUtf8,
//   debounce,
//   throttle

// }

module.exports = {
  indexOf: indexOf,
  contains: contains,
  append: append,
  remove: remove,
  //event方法kuozhan
  addEvent: addEvent,
  removeEvent: removeEvent,
  // handleEvent,
  // fixEvent,

  client: client,
  //扩展trim(),ltrim(),rtrim()去除字符串两端空格
  trim: trim,
  //去除字符串中间空格
  ctrim: ctrim,
  //扩展delHtmlTag()去除HTML标签及标签里面的文字
  delHtmlTag: delHtmlTag,
  //去除换行
  clearBr: clearBr,
  //去除HTML标签
  clearHtml: clearHtml,
  //去除HTML标签及空格、换行
  clearHtmlNS: clearHtmlNS,
  //去除HTML标签及空格（多个空格合并一个）、换行
  clearHtmlNS1: clearHtmlNS1,
  //去除HTML标签及换行
  clearHtmlN: clearHtmlN,
  //去除HTML标签保留空格、换行
  clearHtmlExpSN: clearHtmlExpSN,
  //去除HTML标签所有属性
  clearAttr: clearAttr,
  //用~替换= 用^替换& 转码成微信跳转链接
  enWxJumpLink: enWxJumpLink,
  //用=替换~ 用&替换^ 解码成微信跳转链接
  deWxJumpLink: deWxJumpLink,
  //获取字符串中的数字
  getNumber: getNumber,
  //是否为由数字组成的字符串
  isDigitals: isDigitals,

  pattern: pattern,
  getOsVersion: getOsVersion,
  getAppVersion: getAppVersion,
  getIsAppVersionLastest: getIsAppVersionLastest,
  getScrollPosition: getScrollPosition,
  imgadapt: imgadapt,
  imgchoose: imgchoose,
  formatTime: formatTime,
  formatTimeStr: formatTimeStr,
  stopDefault: stopDefault,
  stopBubble: stopBubble,
  getUrlParam: getUrlParam,
  getParameter: getParameter,
  getDirParam: getDirParam,
  getStrParam: getStrParam,
  getFileType: getFileType,
  getCHSLength: getCHSLength,
  cutCHSString: cutCHSString,
  isExitsFunction: isExitsFunction,
  isExitsVariable: isExitsVariable,
  hasClass: hasClass,
  getStrLen: getStrLen,
  cutStrLen: cutStrLen,
  saWindowHeight: saWindowHeight,
  saWindowWidth: saWindowWidth,

  setCache: setCache,
  getCache: getCache,
  clearCache: clearCache,
  setSessionStorage: setSessionStorage,
  getSessionStorage: getSessionStorage,
  delSessionStorage: delSessionStorage,
  setLocalStorage: setLocalStorage,
  getLocalStorage: getLocalStorage,
  delLocalStorage: delLocalStorage,
  setCookie: setCookie,
  getCookie: getCookie,
  delCookie: delCookie,
  getsec: getsec,


  getRandomNum: getRandomNum,
  getRandomStr: getRandomStr,
  getRandomStrWidthSpecialChar: getRandomStrWidthSpecialChar,

  encodeBase64: encodeBase64,
  decodeBase64: decodeBase64,
  encodeUtf8: encodeUtf8,
  decodeUtf8: decodeUtf8,
  debounce: debounce,
  throttle: throttle,
  textareaInsertText: textareaInsertText,
  textareaMoveToEnd: textareaMoveToEnd

}