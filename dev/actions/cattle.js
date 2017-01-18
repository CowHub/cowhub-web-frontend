import $ from 'jquery'
import store from '../store/store'

// Cattle fetch
export const FETCH_CATTLE_PENDING = 'FETCH_CATTLE_PENDING'
export const FETCH_CATTLE_SUCCESS = 'FETCH_CATTLE_SUCCESS'
export const FETCH_CATTLE_ERROR = 'FETCH_CATTLE_ERROR'

export const fetchCattle = () => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(fetchCattlePending())
    $.ajax(`${process.env.API_ENDPOINT}/cattle`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      dispatch(fetchCattleSuccess(response.cattle))
    }).catch((error) => {
      dispatch(fetchCattleError(error))
    })
  }
}

export const fetchCattlePending = () => {
  return {
    type: FETCH_CATTLE_PENDING,
  }
}

export const fetchCattleSuccess = (cattle) => {
  return {
    type: FETCH_CATTLE_SUCCESS,
    cattle,
  }
}

export const fetchCattleError = (error) => {
  return {
    type: FETCH_CATTLE_ERROR,
    error,
  }
}

// Cattle fetch image
export const FETCH_CATTLE_IMAGE_PENDING = 'FETCH_CATTLE_IMAGE_PENDING'
export const FETCH_CATTLE_IMAGE_SUCCESS = 'FETCH_CATTLE_IMAGE_SUCCESS'
export const FETCH_CATTLE_IMAGE_ERROR = 'FETCH_CATTLE_IMAGE_ERROR'

export const fetchCattleImage = (id) => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(fetchCattleImagePending())
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}/images`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      dispatch(fetchCattleImageSuccess(id, response.images))
    }).catch((error) => {
      dispatch(fetchCattleImageError(error))
    })
  }
}

export const fetchCattleImagePending = () => {
  return {
    type: FETCH_CATTLE_IMAGE_PENDING,
  }
}

export const fetchCattleImageSuccess = (id, images) => {
  return {
    type: FETCH_CATTLE_IMAGE_SUCCESS,
    id,
    images,
  }
}

export const fetchCattleImageError = (error) => {
  return {
    type: FETCH_CATTLE_IMAGE_ERROR,
    error,
  }
}

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

// Cattle delete
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
