export default class Cookie {

  static setCookie(cookieName, cookieValue, expirationDays) {
    let expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + expirationDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + "; path=/";
  };

  static getCookie(cookieName) {
    let cookieSplit = document.cookie.split(';');
    for (let cookie of cookieSplit) {
      let start = cookie.indexOf(cookieName);
      if (start !== -1) {
        console.log(cookie);
        console.log(start);
        return cookie.substring(start + cookieName.length + 1, cookie.length);
      }
    }
    return null;
  }

};
