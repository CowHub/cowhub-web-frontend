import $ from 'jquery'

const hostName = process.env['API_HOSTNAME']

export default class Auth {

  // Params: email, password, password_confirmation
  static register(params) {
    $.ajax(`//${hostName}/user/create`, {
      method: 'POST',
      data: params
    }).then((res) => {
      window.localStorage.setItem("auth_token", res.auth_token);
      Auth.onChange(true)
    }).catch((err) => {
      console.log(err);
    })
  }

  // Params: email, password
  static login(params) {
    $.ajax(`//${hostName}/user/authenticate`, {
      method: 'POST',
      data: params
    }).then((res) => {
      window.localStorage.setItem("auth_token", res.auth_token);
      Auth.onChange(true)
    }).catch((err) => {
      console.log(err);
    })
  }

  // Removes token from server and invalidates all current sessions
  static logout() {
    $.ajax(`//${hostName}/user/unauthenticate`, {
      headers: {
        'Authorization': `Bearer ${window.localStorage.auth_token}`
      },
      method: 'DELETE'
    }).then((res) => {
      window.localStorage.removeItem("auth_token");
      Auth.onChange(false)
    }).catch((err) => {
      console.log(err);
    })
  }

  // Basic check to see if there is a token present
  static isLoggedIn() {
    return !!window.localStorage.auth_token
  }

  static redirectIfLoggedIn() {
    if (Auth.isLoggedIn()) { window.location = "/"; }
  }

  // Called with true/false representing whether user is logged in
  static onChange() { }

}
