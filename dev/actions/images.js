import $ from 'jquery';
import store from '../store/store';

// Cattle images fetch
export let FETCH_CATTLE_IMAGES_PENDING = 'FETCH_CATTLE_IMAGES_PENDING';
export let FETCH_CATTLE_IMAGES_SUCCESS = 'FETCH_CATTLE_IMAGES_SUCCESS';
export let FETCH_CATTLE_IMAGES_ERROR = 'FETCH_CATTLE_IMAGES_ERROR';

export function fetchCattleImages(id) {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(fetchCattleImagesPending());
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}/images`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      dispatch(fetchCattleImagesSuccess(response.images));
    }).catch((error) => {
      dispatch(fetchCattleImagesError(error));
    })
  };
};

export function fetchCattleImagesPending() {
  return {
    type: FETCH_CATTLE_IMAGES_PENDING,
  };
};

export function fetchCattleImagesSuccess(images) {
  return {
    type: FETCH_CATTLE_IMAGES_SUCCESS,
    images,
  };
};

export function fetchCattleImagesError(error) {
  return {
    type: FETCH_CATTLE_IMAGES_ERROR,
    error,
  };
};

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
export let FETCH_CATTLE_MATCH_RESULT_PENDING = 'FETCH_CATTLE_MATCH_RESULT_PENDING';
export let FETCH_CATTLE_MATCH_RESULT_SUCCESS = 'FETCH_CATTLE_MATCH_RESULT_SUCCESS';
export let FETCH_CATTLE_MATCH_RESULT_ERROR = 'FETCH_CATTLE_MATCH_RESULT_ERROR';

export function fetchCattleMatchResult(id) {
  let token = store.getState().authentication.token;
  return (dispatch) => {
    dispatch(fetchCattleMatchResultPending());
    $.ajax(`${process.env.API_ENDPOINT}/image/verify/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      if (!response.cattle)
        return;
      dispatch(fetchCattleMatchResultSuccess(response.cattle));
    }).catch((error) => {
      dispatch(fetchCattleMatchResultError(error));
    })
  };
};

export function fetchCattleMatchResultPending() {
  return {
    type: FETCH_CATTLE_MATCH_RESULT_PENDING,
  };
};

export function fetchCattleMatchResultSuccess(cattle) {
  return {
    type: FETCH_CATTLE_MATCH_RESULT_SUCCESS,
    cattle,
  };
};

export function fetchCattleMatchResultError(error) {
  return {
    type: FETCH_CATTLE_MATCH_RESULT_ERROR,
    error,
  };
};
