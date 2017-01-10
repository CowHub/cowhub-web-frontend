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
