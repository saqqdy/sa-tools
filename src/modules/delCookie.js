//删除cookies
function delCookie(name, useLocalStorage) {
  useLocalStorage = typeof useLocalStorage !== 'undefined' ? useLocalStorage : true
  if (window.localStorage && useLocalStorage) {
    localStorage.removeItem(name)
  } else {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = getCookie(name)
    if (cval != null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() + ';path=/'
    }
  }
}

export default delCookie