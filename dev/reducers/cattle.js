import {
  FETCH_CATTLE_PENDING,
  FETCH_CATTLE_SUCCESS,
  FETCH_CATTLE_ERROR,
  UPDATE_CATTLE_PENDING,
  UPDATE_CATTLE_SUCCESS,
  UPDATE_CATTLE_ERROR,
  DELETE_CATTLE_PENDING,
  DELETE_CATTLE_SUCCESS,
  DELETE_CATTLE_ERROR,
  FETCH_CATTLE_IMAGE_PENDING,
  FETCH_CATTLE_IMAGE_SUCCESS,
  FETCH_CATTLE_IMAGE_ERROR,
} from '../actions/cattle'

const initialState = {
  cattle: [],
  cattlePos: null,
  error: null,
  fetching: false,
  fetched: false,
  imageFetchingCount: 0
}

const cattle = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATTLE_PENDING:
      return handleFetchCattlePending(state)
    case FETCH_CATTLE_SUCCESS:
      return handleFetchCattleSuccess(state, action.cattle)
    case FETCH_CATTLE_ERROR:
      return handleFetchCattleError(state, action.error)
    case UPDATE_CATTLE_PENDING:
      return handleUpdateCattlePending(state);
    case UPDATE_CATTLE_SUCCESS:
      return handleUpdateCattleSuccess(state, action.cattle);
    case UPDATE_CATTLE_ERROR:
      return handleUpdateCattleError(state, action.error);
    case DELETE_CATTLE_PENDING:
      return handleDeleteCattlePending(state);
    case DELETE_CATTLE_SUCCESS:
      return handleDeleteCattleSuccess(state, action.id);
    case DELETE_CATTLE_ERROR:
      return handleDeleteCattleError(state, action.error);
    case FETCH_CATTLE_IMAGE_PENDING:
      return handleFetchCattleImagePending(state, action.id);
    case FETCH_CATTLE_IMAGE_SUCCESS:
      return handleFetchCattleImageSuccess(state, action.id, action.image, action.image_id);
    case FETCH_CATTLE_IMAGE_ERROR:
      return handleFetchCattleImageError(state, action.error);
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

export function handleUpdateCattlePending(state) {
  return {
    ...state,
    fetching: true,
  };
}

export function handleUpdateCattleSuccess(state, cattleUpdated) {
  let id = cattleUpdated.id;
  let cattle = state.cattle
  let index = cattle.findIndex( (c) => { return c.id === id } )
  cattle[index] = cattleUpdated
  return {
    ...state,
    cattle,
    fetching: false,
    editing: false
  };
}

export function handleUpdateCattleError(state, error) {
  return {
    ...state,
    error,
    fetching: false,
  };
}

export function handleDeleteCattlePending(state) {
  return {
    ...state,
  };
}

export function handleDeleteCattleSuccess(state, id) {
  let cattle = state.cattle.filter((cattle) => cattle.id !== id);
  return {
    ...state,
    cattle,
    cattlePos: null
  };
}

export function handleDeleteCattleError(state, error) {
  return {
    ...state,
    error,
  };
}

export function handleFetchCattleImagePending(state) {
  return {
    ...state,
    imageFetchingCount: state.imageFetchingCount+1
  };
}

export function handleFetchCattleImageSuccess(state, id, image, image_id) {
  let cattle = state.cattle
  const index = cattle.findIndex((c) => c.id === id);
  let img_obj = {
    image_id: image_id,
    data: image
  };
  if (cattle[index].images)  {
    cattle[index].images.push(img_obj)
  } else {
    let cattle_imgs = [];
    cattle_imgs.push(img_obj);
    cattle[index].images = cattle_imgs;
  }
  return {
    ...state,
    cattle,
    imageFetchingCount: state.imageFetchingCount-1
  }
}

export function handleFetchCattleImageError(state, error) {
  return {
    ...state,
    error,
    imageFetchingCount: state.imageFetchingCount-1
  };
};

export default cattle
