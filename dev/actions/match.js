import store from '../store'
import $ from 'jquery'

// Cattle image match
export let MATCH_CATTLE_IMAGE_PENDING = 'MATCH_CATTLE_IMAGE_PENDING'
export let MATCH_CATTLE_IMAGE_SUCCESS = 'MATCH_CATTLE_IMAGE_SUCCESS'
export let MATCH_CATTLE_IMAGE_ERROR = 'MATCH_CATTLE_IMAGE_ERROR'

export const matchCattleImage = (image) => {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(matchCattleImagePending(image.name))

    const sendImageForVerification = (name, data) => {
      $.ajax(`${process.env.API_ENDPOINT}/cattle/match`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        method: 'POST',
        data: data
      }).then((response) => {
        dispatch(matchCattleImageSuccess(name, response))
      }).catch((error) => {
        dispatch(matchCattleImageError(name, error))
      })
    }

    const data = { images: [] }
    for (const i in params.images) {
      const image = params.images[i]
      const reader = new FileReader()
      reader.onload = (e) => {
        const base64URL = e.target.result
        sendImageForVerification(image.name, { data: base64URL })
      }
      reader.readAsDataURL(image)
    }
  }
}

export function matchCattleImagePending() {
  return {
    type: MATCH_CATTLE_IMAGE_PENDING,
  }
}

export function matchCattleImageSuccess(cattle) {
  return {
    type: MATCH_CATTLE_IMAGE_SUCCESS,
    cattle,
  }
}

export function matchCattleImageError(error) {
  return {
    type: MATCH_CATTLE_IMAGE_ERROR,
    error,
  }
}

// Cattle image match
export let FETCH_CATTLE_MATCH_PENDING = 'FETCH_CATTLE_MATCH_PENDING'
export let FETCH_CATTLE_MATCH_SUCCESS = 'FETCH_CATTLE_MATCH_SUCCESS'
export let FETCH_CATTLE_MATCH_ERROR = 'FETCH_CATTLE_MATCH_ERROR'

export function fetchCattleMatch(name, id) {
  let token = store.getState().authentication.token
  return (dispatch) => {
    dispatch(fetchCattleMatchPending(name))
    $.ajax(`${process.env.API_ENDPOINT}/cattle/match/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      method: 'GET'
    }).then((response) => {
      dispatch(fetchCattleMatchSuccess(name, response))
    }).catch((error) => {
      dispatch(fetchCattleMatchError(name, error))
    })
  }
}

export function fetchCattleMatchPending(name) {
  return {
    type: FETCH_CATTLE_MATCH_PENDING,
    name
  }
}

export function fetchCattleMatchSuccess(name, match) {
  return {
    type: FETCH_CATTLE_MATCH_SUCCESS,
    name,
    match
  }
}

export function fetchCattleMatchError(name, error) {
  return {
    type: FETCH_CATTLE_MATCH_ERROR,
    name,
    error
  }
}
