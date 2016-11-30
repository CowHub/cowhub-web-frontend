import {
  UPLOAD_CATTLE_IMAGE_PENDING,
  UPLOAD_CATTLE_IMAGE_SUCCESS,
  UPLOAD_CATTLE_IMAGE_ERROR,
  MATCH_CATTLE_IMAGE_PENDING,
  MATCH_CATTLE_IMAGE_SUCCESS,
  MATCH_CATTLE_IMAGE_ERROR,
  FETCH_CATTLE_MATCH_PENDING,
  FETCH_CATTLE_MATCH_SUCCESS,
  FETCH_CATTLE_MATCH_ERROR,
} from '../actions'

const initialState = {
  match: null,
  error: null,
  fetching: false,
  fetched: false,
};

const identification = (state = initialState, action) => {
  switch (action.type) {
    case MATCH_CATTLE_IMAGE_SUCCESS:
      return handleMatchCattleImageSuccess(state, action.cattle);
    default:
      return state;
  }
}

const handleMatchCattleImageSuccess = (state, cattle) => {
  return {
    ...state,
    cattle,
  };
}
