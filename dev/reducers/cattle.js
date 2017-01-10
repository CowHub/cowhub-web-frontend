import {
  FETCH_CATTLE_PENDING,
  FETCH_CATTLE_SUCCESS,
  FETCH_CATTLE_ERROR,
  FETCH_CATTLE_IMAGE_PENDING,
  FETCH_CATTLE_IMAGE_SUCCESS,
  FETCH_CATTLE_IMAGE_ERROR,
} from '../actions/cattle'

const initialState = {
  cattle: [],
  error: null,
  fetching: false,
  fetched: false,
  registering: false,
}

const cattle = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATTLE_PENDING:
      return handleFetchCattlePending(state)
    case FETCH_CATTLE_SUCCESS:
      return handleFetchCattleSuccess(state, action.cattle)
    case FETCH_CATTLE_ERROR:
      return handleFetchCattleError(state, action.error)
    case FETCH_CATTLE_IMAGE_PENDING:
      return handleFetchCattleImagePending(state)
    case FETCH_CATTLE_IMAGE_SUCCESS:
      return handleFetchCattleImageSuccess(state, action.id, action.images)
    case FETCH_CATTLE_IMAGE_ERROR:
      return handleFetchCattleImageError(state, action.error)
    default:
      return state
  }
}

export function handleFetchCattlePending(state) {
  return {
    ...state,
    fetching: true,
  }
}

export function handleFetchCattleSuccess(state, cattle) {
  return {
    ...state,
    error: null,
    fetching: false,
    fetched: true,
    cattle
  }
}

export function handleFetchCattleError(state, error) {
  return {
    ...state,
    fetching: false,
    fetched: false,
    error,
  }
}

export function handleFetchCattleImagePending(state) {
  return {
    ...state,
  }
}

export function handleFetchCattleImageSuccess(state, id, images) {
  let cattle = state.cattle
  let index = cattle.findIndex( (c) => { return c.cattle.id === id } )
  cattle[index].cattle.images = images.map((i) => { return i.image_uri })
  cattle[index].index = cattle[index].index ? cattle[index].index : 0
  cattle.unshift( cattle.pop() )
  return {
    ...state,
    cattle
  }
}

export function handleFetchCattleImageError(state, error) {
  return {
    ...state,
    error,
  }
}

export default cattle
