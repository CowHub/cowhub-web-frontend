import $ from 'jquery'
import store from '../store/store'

// Cattle edit
export const EDIT_CATTLE_ENABLE = 'EDIT_CATTLE_ENABLE'
export const EDIT_CATTLE_DISABLE = 'EDIT_CATTLE_DISABLE'

export const editCattleEnable = (id) => {
  return {
    type: EDIT_CATTLE_ENABLE,
    id
  }
}

export const editCattleDisable = (id) => {
  return {
    type: EDIT_CATTLE_DISABLE,
    id
  }
}

// Cattle edit
export const REGISTER_CATTLE_ENABLE = 'REGISTER_CATTLE_ENABLE'
export const REGISTER_CATTLE_DISABLE = 'REGISTER_CATTLE_DISABLE'

export const registerCattleEnable = () => {
  return {
    type: REGISTER_CATTLE_ENABLE,
  }
}

export const registerCattleDisable = () => {
  return {
    type: REGISTER_CATTLE_DISABLE,
  }
}

// Cattle delete
export const DELETE_CATTLE_ENABLE = 'DELETE_CATTLE_ENABLE'
export const DELETE_CATTLE_DISABLE = 'DELETE_CATTLE_DISABLE'

export const deleteCattleEnable = (id) => {
  return {
    type: DELETE_CATTLE_ENABLE,
    id
  }
}

export const deleteCattleDisable = (id) => {
  return {
    type: DELETE_CATTLE_DISABLE,
    id
  }
}

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

// Cattle register
export const REGISTER_CATTLE_PENDING = 'REGISTER_CATTLE_PENDING'
export const REGISTER_CATTLE_SUCCESS = 'REGISTER_CATTLE_SUCCESS'
export const REGISTER_CATTLE_ERROR = 'REGISTER_CATTLE_ERROR'

export const registerCattle = (params) => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(registerCattlePending())
    $.ajax(`${process.env.API_ENDPOINT}/cattle/new`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      data: params,
    }).then((response) => {
      dispatch(registerCattleSuccess(response.cattle))
    }).catch((error) => {
      dispatch(registerCattleError(error))
    })
  }
}

export const registerCattlePending = () => {
  return {
    type: REGISTER_CATTLE_PENDING,
  }
}

export const registerCattleSuccess = (cattle) => {
  return {
    type: REGISTER_CATTLE_SUCCESS,
    cattle,
  }
}

export const registerCattleError = (error) => {
  return {
    type: REGISTER_CATTLE_ERROR,
    error,
  }
}

// Cattle update
export const UPDATE_CATTLE_PENDING = 'UPDATE_CATTLE_PENDING'
export const UPDATE_CATTLE_SUCCESS = 'UPDATE_CATTLE_SUCCESS'
export const UPDATE_CATTLE_ERROR = 'UPDATE_CATTLE_ERROR'

export const updateCattle = (id, params) => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(updateCattlePending())
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      data: params,
    }).then((response) => {
      dispatch(updateCattleSuccess(response.cattle))
    }).catch((error) => {
      dispatch(updateCattleError(error))
    })
  }
}

export const updateCattlePending = () => {
  return {
    type: UPDATE_CATTLE_PENDING,
  }
}

export const updateCattleSuccess = (cattle) => {
  return {
    type: UPDATE_CATTLE_SUCCESS,
    cattle,
  }
}

export const updateCattleError = (error) => {
  return {
    type: UPDATE_CATTLE_ERROR,
    error,
  }
}

// Cattle update
export const DELETE_CATTLE_PENDING = 'DELETE_CATTLE_PENDING'
export const DELETE_CATTLE_SUCCESS = 'DELETE_CATTLE_SUCCESS'
export const DELETE_CATTLE_ERROR = 'DELETE_CATTLE_ERROR'

export const deleteCattle = (id) => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(deleteCattlePending())
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }).then((response) => {
      dispatch(deleteCattleSuccess(id))
    }).catch((error) => {
      dispatch(deleteCattleError(error))
    })
  }
}

export const deleteCattlePending = () => {
  return {
    type: DELETE_CATTLE_PENDING,
  }
}

export const deleteCattleSuccess = (id) => {
  return {
    type: DELETE_CATTLE_SUCCESS,
    id,
  }
}

export const deleteCattleError = (error) => {
  return {
    type: DELETE_CATTLE_ERROR,
    error,
  }
}

// Cattle image upload
export const UPLOAD_CATTLE_IMAGE_PENDING = 'UPLOAD_CATTLE_IMAGE_PENDING'
export const UPLOAD_CATTLE_IMAGE_SUCCESS = 'UPLOAD_CATTLE_IMAGE_SUCCESS'
export const UPLOAD_CATTLE_IMAGE_ERROR = 'UPLOAD_CATTLE_IMAGE_ERROR'

export const uploadCattleImage = (id, image) => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(uploadCattleImagePending())
    $.ajax(`${process.env.API_ENDPOINT}/cattle/${id}/images`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'POST',
      data: {
        data: image
      },
    }).then((response) => {
      dispatch(uploadCattleImageSuccess(id, image))
    }).catch((error) => {
      dispatch(uploadCattleImageError(error))
    })
  }
}

export const uploadCattleImagePending = () => {
  return {
    type: UPLOAD_CATTLE_IMAGE_PENDING,
  }
}

export const uploadCattleImageSuccess = (id, image) => {
  return {
    type: UPLOAD_CATTLE_IMAGE_SUCCESS,
    id,
    image,
  }
}

export const uploadCattleImageError = (error) => {
  return {
    type: UPLOAD_CATTLE_IMAGE_ERROR,
    error,
  }
}

// Cattle image match
export const MATCH_CATTLE_IMAGE_PENDING = 'MATCH_CATTLE_IMAGE_PENDING'
export const MATCH_CATTLE_IMAGE_SUCCESS = 'MATCH_CATTLE_IMAGE_SUCCESS'
export const MATCH_CATTLE_IMAGE_ERROR = 'MATCH_CATTLE_IMAGE_ERROR'

export const matchCattleImage = (params) => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(matchCattleImagePending())
    $.ajax(`${process.env.API_ENDPOINT}/image/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'POST',
      data: params
    }).then((response) => {
      dispatch(matchCattleImageSuccess(response.verificationID))
    }).catch((error) => {
      dispatch(matchCattleImageError(error))
    })
  }
}

export const matchCattleImagePending = () => {
  return {
    type: MATCH_CATTLE_IMAGE_PENDING,
  }
}

export const matchCattleImageSuccess = (id) => {
  return {
    type: MATCH_CATTLE_IMAGE_SUCCESS,
    id,
  }
}

export const matchCattleImageError = (error) => {
  return {
    type: MATCH_CATTLE_IMAGE_ERROR,
    error,
  }
}

// Cattle image match
export const FETCH_CATTLE_MATCH_PENDING = 'FETCH_CATTLE_MATCH_PENDING'
export const FETCH_CATTLE_MATCH_SUCCESS = 'FETCH_CATTLE_MATCH_SUCCESS'
export const FETCH_CATTLE_MATCH_ERROR = 'FETCH_CATTLE_MATCH_ERROR'

export const fetchCattleMatch = (id) => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(fetchCattleMatchPending())
    $.ajax(`${process.env.API_ENDPOINT}/image/verify/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      if (!response.cattle)
        return
      dispatch(fetchCattleMatchSuccess(response.cattle))
    }).catch((error) => {
      dispatch(fetchCattleMatchError(error))
    })
  }
}

export const fetchCattleMatchPending = () => {
  return {
    type: FETCH_CATTLE_MATCH_PENDING,
  }
}

export const fetchCattleMatchSuccess = (cattle) => {
  return {
    type: FETCH_CATTLE_MATCH_SUCCESS,
    cattle,
  }
}

export const fetchCattleMatchError = (error) => {
  return {
    type: FETCH_CATTLE_MATCH_ERROR,
    error,
  }
}
