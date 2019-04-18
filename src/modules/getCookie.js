//读取cookies
function getCookie(name, useLocalStorage) {
  useLocalStorage = typeof useLocalStorage !== 'undefined' ? useLocalStorage : true
  if (window.localStorage && useLocalStorage) {
    var str = localStorage.getItem(name)
    var exp = new Date()
    if (str) {
      var obj = JSON.parse(decodeURIComponent(str))
      if (!obj.hasOwnProperty('value') || !obj.hasOwnProperty('expires')) {
        return null
      } else {
        if (!obj.expires || obj.expires > exp.getTime()) {
          return obj.value
        } else {
          localStorage.removeItem(name)
          return null
        }
      }
      //return (obj.expires > exp.getTime() ? obj.value : null);
    } else {
      return null
    }
  } else {
    var arr = void 0
    var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if ((arr = document.cookie.match(reg))) {
      var obj = JSON.parse(decodeURIComponent(arr[2]))
      if (!obj.hasOwnProperty('value') || !obj.hasOwnProperty('expires')) {
        return null
      } else {
        return obj.value
      }
    } else {
      return null
    }
  }
}
export default getCookie
