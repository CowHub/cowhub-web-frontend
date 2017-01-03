import $ from 'jquery'
import store from '../store/store'

// Token management
export const LOAD_TOKEN = 'LOAD_TOKEN'
export const STORE_TOKEN = 'STORE_TOKEN'
export const REMOVE_TOKEN = 'REMOVE_TOKEN'

export const validateToken = () => {
  const token = store.getState().authentication.token
  return (dispatch) => {
    $.ajax(`${process.env.API_ENDPOINT}/user/validate`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'POST'
    }).then((response) => {
      console.log('Recovered valid session')
    }).catch((err) => {
      if (err.status == 401) dispatch(removeToken())
    })
  }
}

export const fetchToken = () => {
  return {
    type: LOAD_TOKEN
  }
}

export const storeToken = (token) => {
  return {
    type: STORE_TOKEN,
    token
  }
}

export const removeToken = () => {
  return {
    type: REMOVE_TOKEN
  }
}

// Login
export const LOGIN_USER_PENDING = 'LOGIN_USER_PENDING'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

// params: email, password
export const loginUser = (params) => {
  return (dispatch) => {
    dispatch(loginUserPending())
    $.ajax(`${process.env.API_ENDPOINT}/user/authenticate`, {
      method: 'POST',
      data: params
    }).then((response) => {
      dispatch(loginUserSuccess())
      dispatch(storeToken(response.auth_token))
    }).catch((error) => {
      dispatch(loginUserError(error))
    })
  }
}

export const loginUserPending = () => {
  return {
    type: LOGIN_USER_PENDING
  }
}

export const loginUserSuccess = () => {
  return {
    type: LOGIN_USER_SUCCESS
  }
}

export const loginUserError = (error) => {
  return {
    type: LOGIN_USER_ERROR,
    error
  }
}

// Register
export const REGISTER_USER_PENDING = 'REGISTER_USER_PENDING'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'

// params: email, password, password_confirmation
export const registerUser = (params) => {
  return (dispatch) => {
    dispatch(registerUserPending())
    $.ajax(`${process.env.API_ENDPOINT}/user/create`, {
      method: 'POST',
      data: params
    }).then((response) => {
      dispatch(registerUserSuccess())
      dispatch(storeToken(response.auth_token))
    }).catch((error) => {
      dispatch(registerUserError(error))
    })
  }
}

export const registerUserPending = () => {
  return {
    type: REGISTER_USER_PENDING
  }
}

export const registerUserSuccess = () => {
  return {
    type: REGISTER_USER_SUCCESS
  }
}

export const registerUserError = (error) => {
  return {
    type: REGISTER_USER_ERROR,
    error
  }
}

// Logout
export const LOGOUT_USER_PENDING = 'LOGOUT_USER_PENDING'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'

export const logoutUser = () => {
  const token = store.getState().authentication.token
  const logoutSuccess = (dispatch) => {
    dispatch(logoutUserSuccess())
    dispatch(removeToken())
  }
  return (dispatch) => {
    dispatch(logoutUserPending())
    $.ajax(`${process.env.API_ENDPOINT}/user/unauthenticate`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      method: 'DELETE',
    }).then((response) => {
      logoutSuccess(dispatch)
    }).catch((error) => {
      if (error.status === 401) {
        logoutSuccess(dispatch)
      } else {
        dispatch(logoutUserError(error))
      }
    })
  }
}

export const logoutUserPending = () => {
  return {
    type: LOGOUT_USER_PENDING
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS
  }
}

export const logoutUserError = (error) => {
  return {
    type: LOGOUT_USER_ERROR,
    error
  }
}
