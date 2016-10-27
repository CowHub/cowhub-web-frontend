// Loads session identifier from storage into store


export let GET_SESSION_IDENTIFIER = 'GET_SESSION_IDENTIFIER';
export let LOGIN_USER = 'LOGIN_USER';
export let LOGOUT_USER = 'LOGOUT_USER';
export let REGISTER_USER = 'REGISTER_USER';

export function getSessionIdentifier() {
  return {
    type: GET_SESSION_IDENTIFIER
  }
}

// Params: email, password
export function loginUser(params) {
  return {
    type: LOGIN_USER,
    ...params
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  }
}

// Params: email, password, password_confirmation
export function registerUser(params) {
  return {
    type: REGISTER_USER,
    ...params
  }
}
