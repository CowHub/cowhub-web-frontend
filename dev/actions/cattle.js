import $ from 'jquery';
import store from '../store/store';

// Cattle view management
export let EXPAND_CATTLE_TOGGLE = 'EXPAND_CATTLE_TOGGLE';

export function expandCattleToggle(id) {
  return {
    type: EXPAND_CATTLE_TOGGLE,
    id,
  };
};

// Cattle fetch
export let FETCH_CATTLE_PENDING = 'FETCH_CATTLE_PENDING';
export let FETCH_CATTLE_SUCCESS = 'FETCH_CATTLE_SUCCESS';
export let FETCH_CATTLE_ERROR = 'FETCH_CATTLE_ERROR';

export function fetchCattle() {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(fetchCattlePending());
    $.ajax(`${process.env.API_ENDPOINT}/cattle`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      dispatch(fetchCattleSuccess(response.cattle));
    }).catch((error) => {
      dispatch(fetchCattleError(error));
    })
  };
};

export function fetchCattlePending() {
  return {
    type: FETCH_CATTLE_PENDING,
  };
};

export function fetchCattleSuccess(cattle) {
  return {
    type: FETCH_CATTLE_SUCCESS,
    cattle,
  };
};

export function fetchCattleError(error) {
  return {
    type: FETCH_CATTLE_ERROR,
    error,
  };
};

// Cattle register
export let CATTLE_REGISTRATION_PENDING = 'CATTLE_REGISTRATION_PENDING';
export let CATTLE_REGISTRATION_SUCCESS = 'CATTLE_REGISTRATION_SUCCESS';
export let CATTLE_REGISTRATION_ERROR = 'CATTLE_REGISTRATION_ERROR';

export function registerCattle(params) {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(registerCattlePending());
    $.ajax(`${process.env.API_ENDPOINT}/cattle/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      data: params,
    }).then((response) => {
      dispatch(registerCattleSuccess(response.cattle));
      location.reload();
    }).catch((error) => {
      dispatch(registerCattleError(error));
    })
  };
};

export function registerCattlePending() {
  return {
    type: CATTLE_REGISTRATION_PENDING,
  };
};

export function registerCattleSuccess(cattle) {
  return {
    type: CATTLE_REGISTRATION_SUCCESS,
    cattle,
  };
};

export function registerCattleError(error) {
  return {
    type: CATTLE_REGISTRATION_ERROR,
    error,
  };
};
