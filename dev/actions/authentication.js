// Token management
export let FETCH_TOKEN = 'FETCH_TOKEN';
export let STORE_TOKEN = 'STORE_TOKEN';

export function fetchToken() {
  return {
    type: FETCH_TOKEN,
  }
}

export function storeToken(token) {
  return {
    type: STORE_TOKEN,
    token,
  }
}

// Login
export let LOGIN_USER_START = 'LOGIN_USER_START';
export let LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export let LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export function loginUserStart() {
  return {
    type: LOGIN_USER_START,
  }
}

export function loginUserSuccess() {
  return {
    type: LOGIN_USER_SUCCESS,
  }
}

export function loginUserError(error) {
  return {
    type: LOGIN_USER_ERROR,
    error,
  }
}

// Register
export let REGISTER_USER_START = 'REGISTER_USER_START';
export let REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export let REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

export function registerUserStart() {
  return {
    type: REGISTER_USER_START,
  }
}

export function registerUserSuccess() {
  return {
    type: REGISTER_USER_SUCCESS,
  }
}

export function registerUserError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error,
  }
}
