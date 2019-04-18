import client from './modules/client'
import setCookie from './modules/setCookie'
import getCookie from './modules/getCookie'
import delCookie from './modules/delCookie'
import addEvent from './modules/addEvent'
import removeEvent from './modules/removeEvent'
import pattern from './modules/pattern'
import getOsVersion from './modules/getOsVersion'
import getAppVersion from './modules/getAppVersion'
import getIsAppVersionLastest from './modules/getIsAppVersionLastest'
console.log({
  client: client(),
  pattern: pattern(),
  setCookie,
  getCookie,
  delCookie,
  addEvent,
  removeEvent,
  getOsVersion,
  getAppVersion,
  getIsAppVersionLastest
})
export default {
  client: client(),
  pattern: pattern(),
  setCookie,
  getCookie,
  delCookie,
  addEvent,
  removeEvent,
  getOsVersion,
  getAppVersion,
  getIsAppVersionLastest
}