/**
 * setCookie()
 */
//写cookies
function setCookie(name, value, time, useLocalStorage) {
  useLocalStorage = typeof useLocalStorage !== 'undefined' ? useLocalStorage : true
  var strsec = time// getsec(time)
  var exp = new Date()
  var expires = strsec ? exp.getTime() + strsec : ''
  var obj = {}
  obj.value = value
  obj.expires = expires
  obj = encodeURIComponent(JSON.stringify(obj))
  if (window.localStorage && useLocalStorage) {
    localStorage.setItem(name, obj)
  } else {
    strsec = strsec ? strsec : 2592000000 //没有设定时间的默认30天
    // var strsec = getsec(time);
    // var exp = new Date();
    // value = (typeof(value) == "object" ? JSON.stringify(value) : value);
    exp.setTime(exp.getTime() + strsec)
    document.cookie = name + '=' + obj + ';expires=' + exp.toGMTString() + ';path=/'
  }
}

export default setCookie
