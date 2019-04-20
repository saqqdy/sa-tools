/**
 * @Author: saqqdy
 * @Date: 2019-04-08 20:35:04
 * @Last Modified by: saqqdy.com
 * @Last Modified time: 2019-04-08 20:35:04
 */

// 全局参数
import client from './modules/client' // client方法返回一个浏览器判断结果对象
import pattern from './modules/pattern' // pattern返回一些常用的正则

// String扩展、数组方法
import trim from './modules/trim' // 根据传参来去除空格
import clearAttr from './modules/clearAttr' // 去除HTML标签所有属性
import clearBr from './modules/clearBr' // 去除换行
import clearHtml from './modules/clearHtml' // 去除HTML标签
import clearHtmlExpSN from './modules/clearHtmlExpSN' // 去除HTML标签保留空格、换行
import clearHtmlN from './modules/clearHtmlN' // 去除HTML标签及换行
import clearHtmlNS from './modules/clearHtmlNS' // 去除HTML标签及空格、换行
import clearHtmlTag from './modules/clearHtmlTag' // 去除HTML标签及标签里面的文字
import getNumber from './modules/getNumber' // 获取字符串中的数字
import imgAdapt from './modules/imgAdapt' // 扩展图片自动适应多种分辨率small original
import imgChoose from './modules/imgChoose' // 扩展图片自动适应多种分辨率@2x @3x
import getRandomNum from './modules/getRandomNum' // 获取随机整数
import getRandomStr from './modules/getRandomStr' // 获取随机字符串
import getRandomStrWidthSpecialChar from './modules/getRandomStrWidthSpecialChar' // 获取随机字符串带特殊符号
import getCHSLength from './modules/getCHSLength' // 获取字符串长度，中文算2个字符
import cutCHSString from './modules/cutCHSString' // 截取字符串，中文算2个字节
import textareaInsertText from './modules/textareaInsertText' // textarea或input对象在指定的光标位置插入文字
import textareaMoveToEnd from './modules/textareaMoveToEnd' // textarea或input对象将光标定位到文字尾部

// 获取一下状态
import isDigitals from './modules/isDigitals' // 是否为由数字组成的字符串
import isExitsFunction from './modules/isExitsFunction' // 是否存在指定函数
import isExitsVariable from './modules/isExitsVariable' // 是否存在指定变量
import getWindowSize from './modules/getWindowSize' // getWindowSize获取窗口大小
import getAppVersion from './modules/getAppVersion' // 获取APP版本号
import getOsVersion from './modules/getOsVersion' // 获取手机系统版本
import getIsAppVersionLastest from './modules/getIsAppVersionLastest' // 版本号大小对比
import getDirParam from './modules/getDirParam' // 获取目录形式URL参数
import getParameter from './modules/getParameter' // 获取单个URL参数
import getFileType from './modules/getFileType' // 文件后缀名
import getUrlParam from './modules/getUrlParam' // 获取URL参数

// 日期格式化
import formatTime from './modules/formatTime' // 日期格式化插件
import formatTimeStr from './modules/formatTimeStr' // 格式化时间成：刚刚、几分钟前

// 缓存、cookie、session
import setCookie from './modules/setCookie' // setCookie写入cookie的方法
import setLocal from './modules/setLocal' // 写localStorage
import setSession from './modules/setSession' // 写sessionStorage
import getCookie from './modules/getCookie' // 读取cookies
import getLocal from './modules/getLocal' // 读取localStorage
import getSession from './modules/getSession' // 读取sessionStorage
import delCookie from './modules/delCookie' // 删除cookie
import delLocal from './modules/delLocal' // 删除localStorage
import delSession from './modules/delSession' // 删除sessionStorage

// 编码与解码
import encodeBase64 from './modules/encodeBase64' // 字符串、数字转base64
import encodeUtf8 from './modules/encodeUtf8' // 编码Utf8
import decodeBase64 from './modules/decodeBase64' // base64解码
import decodeUtf8 from './modules/decodeUtf8' // 解码Utf8
import enWxJumpLink from './modules/enWxJumpLink' // 用*替换= 用!替换& 转码成微信跳转链接
import enWxJumpLinkOld from './modules/enWxJumpLinkOld' // 用~替换= 用^替换& 转码成微信跳转链接
import deWxJumpLink from './modules/deWxJumpLink' // 用=替换* 用&替换! 解码成微信跳转链接
import deWxJumpLinkOld from './modules/deWxJumpLinkOld' // 用=替换~ 用&替换^ 解码成微信跳转链接

// 防抖与限流
import debounce from './modules/debounce' // 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
import throttle from './modules/throttle' // 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次

// 事件委托、其他事件方法
import stopBubble from './modules/stopBubble' // 阻止冒泡
import stopDefault from './modules/stopDefault' // 阻止默认事件
import addEvent from './modules/addEvent' // 事件委托，支持多次委托
import removeEvent from './modules/removeEvent' // removeEvent移除由addEvent创建的事件委托
import getScrollPosition from './modules/getScrollPosition' // 获取滑动到顶部和底部 返回'top' 'bottom'，建议使用限流

export default {
  client: client(),
  pattern: pattern(),

  trim,
  clearAttr,
  clearBr,
  clearHtml,
  clearHtmlExpSN,
  clearHtmlN,
  clearHtmlNS,
  clearHtmlTag,
  getNumber,
  imgAdapt,
  imgChoose,
  getRandomNum,
  getRandomStr,
  getRandomStrWidthSpecialChar,
  getCHSLength,
  cutCHSString,
  textareaInsertText,
  textareaMoveToEnd,

  isDigitals,
  isExitsFunction,
  isExitsVariable,
  getWindowSize,
  getAppVersion,
  getOsVersion,
  getIsAppVersionLastest,
  getDirParam,
  getParameter,
  getFileType,
  getUrlParam,

  formatTime,
  formatTimeStr,

  setCookie,
  setLocal,
  setSession,
  getCookie,
  getLocal,
  getSession,
  delCookie,
  delLocal,
  delSession,

  encodeBase64,
  encodeUtf8,
  decodeBase64,
  decodeUtf8,
  enWxJumpLink,
  enWxJumpLinkOld,
  deWxJumpLink,
  deWxJumpLinkOld,

  debounce,
  throttle,

  stopBubble,
  stopDefault,
  addEvent,
  removeEvent,
  getScrollPosition
}
