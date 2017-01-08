import {
  REGISTER_CATTLE_ENABLE,
  REGISTER_CATTLE_DISABLE,
  EDIT_CATTLE_ENABLE,
  EDIT_CATTLE_DISABLE,
  DELETE_CATTLE_ENABLE,
  DELETE_CATTLE_DISABLE,
  FETCH_CATTLE_PENDING,
  FETCH_CATTLE_SUCCESS,
  FETCH_CATTLE_ERROR,
  FETCH_CATTLE_IMAGE_PENDING,
  FETCH_CATTLE_IMAGE_SUCCESS,
  FETCH_CATTLE_IMAGE_ERROR,
  REGISTER_CATTLE_PENDING,
  REGISTER_CATTLE_SUCCESS,
  REGISTER_CATTLE_ERROR,
  UPDATE_CATTLE_PENDING,
  UPDATE_CATTLE_SUCCESS,
  UPDATE_CATTLE_ERROR,
  UPLOAD_CATTLE_IMAGE_PENDING,
  UPLOAD_CATTLE_IMAGE_SUCCESS,
  UPLOAD_CATTLE_IMAGE_ERROR,
  DELETE_CATTLE_PENDING,
  DELETE_CATTLE_SUCCESS,
  DELETE_CATTLE_ERROR,
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
    case REGISTER_CATTLE_ENABLE:
      return handleRegisterCattleEnable(state)
    case REGISTER_CATTLE_DISABLE:
      return handleRegisterCattleDisable(state)
    case EDIT_CATTLE_ENABLE:
      return handleEditCattleEnable(state, action.id)
    case EDIT_CATTLE_DISABLE:
      return handleEditCattleDisable(state, action.id)
    case DELETE_CATTLE_ENABLE:
      return handleDeleteCattleEnable(state, action.id)
    case DELETE_CATTLE_DISABLE:
      return handleDeleteCattleDisable(state, action.id)
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
    case REGISTER_CATTLE_PENDING:
      return handleRegisterCattlePending(state)
    case REGISTER_CATTLE_SUCCESS:
      return handleRegisterCattleSuccess(state, action.cattle)
    case REGISTER_CATTLE_ERROR:
      return handleRegisterCattleError(state, action.error)
    case UPDATE_CATTLE_PENDING:
      return handleUpdateCattlePending(state)
    case UPDATE_CATTLE_SUCCESS:
      return handleUpdateCattleSuccess(state, action.cattle)
    case UPDATE_CATTLE_ERROR:
      return handleUpdateCattleError(state, action.error)
    case UPLOAD_CATTLE_IMAGE_PENDING:
      return handleUploadCattleImagePending(state)
    case UPLOAD_CATTLE_IMAGE_SUCCESS:
      return handleUploadCattleImageSuccess(state, action.id, action.image)
    case UPLOAD_CATTLE_IMAGE_ERROR:
      return handleUploadCattleImageError(state, action.error)
    case DELETE_CATTLE_PENDING:
      return handleDeleteCattlePending(state)
    case DELETE_CATTLE_SUCCESS:
      return handleDeleteCattleSuccess(state, action.id)
    case DELETE_CATTLE_ERROR:
      return handleDeleteCattleError(state, action.error)
    default:
      return state
  }
}

export function handleRegisterCattleEnable(state) {
  return {
    ...state,
    registering: true,
  }
}

export function handleRegisterCattleDisable(state) {
  return {
    ...state,
    registering: false,
  }
}

export function handleEditCattleEnable(state, id) {
  let cattle = state.cattle
  for (let i in cattle) {
    if (cattle[i].cattle.id == id) {
      cattle[i].editing = true
      cattle[i].deleting = false
    }
  }
  return {
    ...state,
    cattle,
  }
}

export function handleEditCattleDisable(state, id) {
  let cattle = state.cattle
  for (let i in cattle) {
    if (cattle[i].cattle.id == id) { cattle[i].editing = false }
  }
  return {
    ...state,
    cattle,
  }
}

export function handleDeleteCattleEnable(state, id) {
  let cattle = state.cattle
  for (let i in cattle) {
    if (cattle[i].cattle.id == id) {
      cattle[i].editing = false
      cattle[i].deleting = true
    }
  }
  return {
    ...state,
    cattle,
  }
}

export function handleDeleteCattleDisable(state, id) {
  let cattle = state.cattle
  for (let i in cattle) {
    if (cattle[i].cattle.id == id) {
      cattle[i].deleting = false
    }
  }
  return {
    ...state,
    cattle,
  }
}

export function handleUploadCattleImageDisable(state, id) {
  let cattle = state.cattle
  for (let i in cattle) {
    if (cattle[i].cattle.id == id) { cattle[i].uploading = false; cattle[i].toUpload = [] }
  }
  return {
    ...state,
    cattle,
  }
}

export function handleFetchCattlePending(state) {
  return {
    ...state,
    fetching: true,
  }
}

const generateCattleObject = (cattle) => {
  return {
    cattle,
    editing: false,
    deleting: false,
    uploading: false,
  }
}

export function handleFetchCattleSuccess(state, cattleRaw) {
  let cattle = []
  for (let i in cattleRaw) {
    cattle.push(generateCattleObject(cattleRaw[i]))
  }

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
  const index = cattle.findIndex( (c) => { return c.cattle.id === id } )
  cattle[index].cattle.images = images;
  cattle[index].hasImages = images.length ? true : false;
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

export function handleRegisterCattlePending(state) {
  return {
    ...state,
  }
}

export function handleRegisterCattleSuccess(state, cattleNew) {
  let cattle = state.cattle
  cattle.push(generateCattleObject(cattleNew))
  return {
    ...state.authentication,
    registering: false,
    cattle,
  }
}

export function handleRegisterCattleError(state, error) {
  return {
    ...state,
    error,
  }
}

export function handleUpdateCattlePending(state) {
  return {
    ...state,
  }
}

export function handleUpdateCattleSuccess(state, cattleUpdated) {
  let id = cattleUpdated.id
  let cattle = state.cattle
  let index = cattle.findIndex( (c) => { return c.cattle.id === id } )
  let images = cattle[index].cattle.images
  let cattleIndex = cattle[index].index
  cattle[index] = generateCattleObject(cattleUpdated)
  cattle[index].cattle.images = images
  cattle[index].index = cattleIndex
  return {
    ...state.authentication,
    cattle,
  }
}

export function handleUpdateCattleError(state, error) {
  return {
    ...state,
    error,
  }
}

export function handleUploadCattleImagePending(state) {
  return {
    ...state,
  }
}

export function handleUploadCattleImageSuccess(state, id, image) {
  let cattle = state.cattle
  const index = cattle.findIndex( (c) => { return c.cattle.id === id } )
  cattle[index].cattle.images.push({
    id,
    image
  })
  return {
    ...state.authentication,
    cattle
  }
}

export function handleUploadCattleImageError(state, error) {
  return {
    ...state,
    error,
  }
}

export function handleDeleteCattlePending(state) {
  return {
    ...state,
  }
}

export function handleDeleteCattleSuccess(state, id) {
  let cattle = state.cattle.filter( (c) => c.cattle.id !== id)
  return {
    ...state,
    cattle,
  }
}

export function handleDeleteCattleError(state, error) {
  return {
    ...state,
    error,
  }
}

export default cattle
