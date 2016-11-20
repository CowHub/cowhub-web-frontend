import $ from 'jquery';
import store from '../store/store';

// Cattle edit
export let EDIT_CATTLE_ENABLE = 'EDIT_CATTLE_ENABLE';
export let EDIT_CATTLE_DISABLE = 'EDIT_CATTLE_DISABLE';

export function editCattleEnable(id) {
  return {
    type: EDIT_CATTLE_ENABLE,
    id
  };
};

export function editCattleDisable(id) {
  return {
    type: EDIT_CATTLE_DISABLE,
    id
  };
};

// Cattle edit
export let REGISTER_CATTLE_ENABLE = 'REGISTER_CATTLE_ENABLE';
export let REGISTER_CATTLE_DISABLE = 'REGISTER_CATTLE_DISABLE';

export function registerCattleEnable() {
  return {
    type: REGISTER_CATTLE_ENABLE,
  };
};

export function registerCattleDisable() {
  return {
    type: REGISTER_CATTLE_DISABLE,
  };
};

// Cattle delete
export let DELETE_CATTLE_ENABLE = 'DELETE_CATTLE_ENABLE';
export let DELETE_CATTLE_DISABLE = 'DELETE_CATTLE_DISABLE';

export function deleteCattleEnable(id) {
  return {
    type: DELETE_CATTLE_ENABLE,
    id
  };
};

export function deleteCattleDisable(id) {
  return {
    type: DELETE_CATTLE_DISABLE,
    id
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

// Cattle fetch
export let FETCH_CATTLE_IMAGE_PENDING = 'FETCH_CATTLE_IMAGE_PENDING';
export let FETCH_CATTLE_IMAGE_SUCCESS = 'FETCH_CATTLE_IMAGE_SUCCESS';
export let FETCH_CATTLE_IMAGE_ERROR = 'FETCH_CATTLE_IMAGE_ERROR';

export function fetchCattleImage(id) {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(fetchCattleImagePending());
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}/images`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      dispatch(fetchCattleImageSuccess(id, response.images));
    }).catch((error) => {
      dispatch(fetchCattleImageError(error));
    })
  };
};

export function fetchCattleImagePending() {
  return {
    type: FETCH_CATTLE_IMAGE_PENDING,
  };
};

export function fetchCattleImageSuccess(id, images) {
  return {
    type: FETCH_CATTLE_IMAGE_SUCCESS,
    id,
    images,
  };
};

export function fetchCattleImageError(error) {
  return {
    type: FETCH_CATTLE_IMAGE_ERROR,
    error,
  };
};

// Cattle register
export let REGISTER_CATTLE_PENDING = 'REGISTER_CATTLE_PENDING';
export let REGISTER_CATTLE_SUCCESS = 'REGISTER_CATTLE_SUCCESS';
export let REGISTER_CATTLE_ERROR = 'REGISTER_CATTLE_ERROR';

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
    }).catch((error) => {
      dispatch(registerCattleError(error));
    })
  };
};

export function registerCattlePending() {
  return {
    type: REGISTER_CATTLE_PENDING,
  };
};

export function registerCattleSuccess(cattle) {
  return {
    type: REGISTER_CATTLE_SUCCESS,
    cattle,
  };
};

export function registerCattleError(error) {
  return {
    type: REGISTER_CATTLE_ERROR,
    error,
  };
};

// Cattle update
export let UPDATE_CATTLE_PENDING = 'UPDATE_CATTLE_PENDING';
export let UPDATE_CATTLE_SUCCESS = 'UPDATE_CATTLE_SUCCESS';
export let UPDATE_CATTLE_ERROR = 'UPDATE_CATTLE_ERROR';

export function updateCattle(id, params) {
  let token = store.getState().authentication.token;

  return (dispatch) => {
    dispatch(updateCattlePending());
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      data: params,
    }).then((response) => {
      dispatch(updateCattleSuccess(response.cattle));
    }).catch((error) => {
      dispatch(updateCattleError(error));
    })
  };
};

export function updateCattlePending() {
  return {
    type: UPDATE_CATTLE_PENDING,
  };
};

export function updateCattleSuccess(cattle) {
  return {
    type: UPDATE_CATTLE_SUCCESS,
    cattle,
  };
};

export function updateCattleError(error) {
  return {
    type: UPDATE_CATTLE_ERROR,
    error,
  };
}

// Cattle update
export let DELETE_CATTLE_PENDING = 'DELETE_CATTLE_PENDING';
export let DELETE_CATTLE_SUCCESS = 'DELETE_CATTLE_SUCCESS';
export let DELETE_CATTLE_ERROR = 'DELETE_CATTLE_ERROR';

export function deleteCattle(id) {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(deleteCattlePending());
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }).then((response) => {
      dispatch(deleteCattleSuccess(id));
    }).catch((error) => {
      dispatch(deleteCattleError(error));
    })
  };
};

export function deleteCattlePending() {
  return {
    type: DELETE_CATTLE_PENDING,
  };
};

export function deleteCattleSuccess(id) {
  return {
    type: DELETE_CATTLE_SUCCESS,
    id,
  };
};

export function deleteCattleError(error) {
  return {
    type: DELETE_CATTLE_ERROR,
    error,
  };
}

// Cattle image upload
export let UPLOAD_CATTLE_IMAGE_PENDING = 'UPLOAD_CATTLE_IMAGE_PENDING';
export let UPLOAD_CATTLE_IMAGE_SUCCESS = 'UPLOAD_CATTLE_IMAGE_SUCCESS';
export let UPLOAD_CATTLE_IMAGE_ERROR = 'UPLOAD_CATTLE_IMAGE_ERROR';

export function uploadCattleImage(id, params) {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(uploadCattleImagePending());
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}/images`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'POST',
      data: params
    }).then((response) => {
      dispatch(uploadCattleImageSuccess(response.image));
    }).catch((error) => {
      dispatch(uploadCattleImageError(error));
    })
  };
};

export function uploadCattleImagePending() {
  return {
    type: UPLOAD_CATTLE_IMAGE_PENDING,
  };
};

export function uploadCattleImageSuccess(image) {
  return {
    type: UPLOAD_CATTLE_IMAGE_SUCCESS,
    image,
  };
};

export function uploadCattleImageError(error) {
  return {
    type: UPLOAD_CATTLE_IMAGE_ERROR,
    error,
  };
};

// Cattle image match
export let MATCH_CATTLE_IMAGE_PENDING = 'MATCH_CATTLE_IMAGE_PENDING';
export let MATCH_CATTLE_IMAGE_SUCCESS = 'MATCH_CATTLE_IMAGE_SUCCESS';
export let MATCH_CATTLE_IMAGE_ERROR = 'MATCH_CATTLE_IMAGE_ERROR';

export function matchCattleImage(params) {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(matchCattleImagePending());
    $.ajax(`${process.env.API_ENDPOINT}/image/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'POST',
      data: params
    }).then((response) => {
      dispatch(matchCattleImageSuccess(response.verificationID));
    }).catch((error) => {
      dispatch(matchCattleImageError(error));
    })
  };
};

export function matchCattleImagePending() {
  return {
    type: MATCH_CATTLE_IMAGE_PENDING,
  };
};

export function matchCattleImageSuccess(id) {
  return {
    type: MATCH_CATTLE_IMAGE_SUCCESS,
    id,
  };
};

export function matchCattleImageError(error) {
  return {
    type: MATCH_CATTLE_IMAGE_ERROR,
    error,
  };
};

// Cattle image match
export let FETCH_CATTLE_MATCH_PENDING = 'FETCH_CATTLE_MATCH_PENDING';
export let FETCH_CATTLE_MATCH_SUCCESS = 'FETCH_CATTLE_MATCH_SUCCESS';
export let FETCH_CATTLE_MATCH_ERROR = 'FETCH_CATTLE_MATCH_ERROR';

export function fetchCattleMatch(id) {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(fetchCattleMatchPending());
    $.ajax(`${process.env.API_ENDPOINT}/image/verify/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      if (!response.cattle)
        return;
      dispatch(fetchCattleMatchSuccess(response.cattle));
    }).catch((error) => {
      dispatch(fetchCattleMatchError(error));
    })
  };
};

export function fetchCattleMatchPending() {
  return {
    type: FETCH_CATTLE_MATCH_PENDING,
  };
};

export function fetchCattleMatchSuccess(cattle) {
  return {
    type: FETCH_CATTLE_MATCH_SUCCESS,
    cattle,
  };
};

export function fetchCattleMatchError(error) {
  return {
    type: FETCH_CATTLE_MATCH_ERROR,
    error,
  };
};
