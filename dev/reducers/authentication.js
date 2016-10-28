import * as Authentication from '../actions/authentication'

import {
  FETCH_TOKEN,
  STORE_TOKEN,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from '../actions/authentication'

const authentication = (state = {}, action) => {
  switch (action.type) {
  case FETCH_TOKEN:
    return handleFetchToken(state);
  case STORE_TOKEN:
    return handleStoreToken(state, action.token);
  default:
    return state;
  }
};

const handleFetchToken = (state) => {
  let token = state.token;
  if (!token) token = {};

  if (window.localStorage && window.localStorage.auth_token) {
    token.value = window.localStorage.auth_token;
    token.inStore = true;
    token.error = null;
  } else {
    token.value = null;
    token.inStore = false;
    token.error = 'Token does not exist in localStorage';
  }

  return {
    ...state,
    token
  }
}

const handleStoreToken = (state, token) => {

  return state;
};

export default authentication;
