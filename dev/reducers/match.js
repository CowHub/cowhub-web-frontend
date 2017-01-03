import {
  MATCH_CATTLE_IMAGE_PENDING,
  MATCH_CATTLE_IMAGE_SUCCESS,
  MATCH_CATTLE_IMAGE_ERROR,
  FETCH_CATTLE_MATCH_PENDING,
  FETCH_CATTLE_MATCH_SUCCESS,
  FETCH_CATTLE_MATCH_ERROR
} from '../actions'

const initialState = {
  matches: []
}

const match = (state = initialState, action) => {
  switch (action.type) {
    case MATCH_CATTLE_IMAGE_PENDING:
      return handleMatchCattleImagePending(state, action.name)
    case MATCH_CATTLE_IMAGE_SUCCESS:
      return handleMatchCattleImageSuccess(state, action.name, action.cattle)
    case MATCH_CATTLE_IMAGE_ERROR:
      return handleMatchCattleImageError(state, action.name, action.error)
    default:
      return state
  }
}

const handleMatchCattleImagePending = (state, name) => {
  const matches = state.matches
  matches[name] = {
    cattle_id: null,
    match_id: null,
    error: null,
    uploading: true,
    fetching: false,
    fetched: false
  }
  return {
    ...state,
    matches
  }
}

const handleMatchCattleImageSuccess = (state, name, match) => {
  const matches = state.matches
  matches[name] = {
    ...matches[name],
    uploading: false,
    match_id: match.id
  }
  return {
    ...state,
    matches
  }
}

const handleMatchCattleImageError = (state, name, error) => {
  const matches = state.matches
  matches[name] = {
    ...matches[name],
    uploading: false,
    error
  }
  return {
    ...state,
    matches
  }
}
