import * as Authentication from '../actions/authentication'

const initialState = {
  token: ''
};

export default authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
  case Authentication.GET_SESSION_IDENTIFIER:
    return handleGetSessionIdentifier(state, action.token);
  default:
    return state;
  }
};

let handleGetSessionIdentifier = (state, token) => {
  return {
    ...state,
    token
  }
}
