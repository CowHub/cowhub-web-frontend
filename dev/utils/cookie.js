export default class Cookie {

  static setCookie(cookieName, cookieValue, expirationDays) {
    let expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + expirationDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + "; path=/";
  };

};
