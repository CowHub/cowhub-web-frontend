import {
  EXPAND_CATTLE_TOGGLE,
  FETCH_CATTLE_PENDING,
  FETCH_CATTLE_SUCCESS,
  FETCH_CATTLE_ERROR,
  REGISTER_CATTLE_PENDING,
  REGISTER_CATTLE_SUCCESS,
  REGISTER_CATTLE_ERROR,
} from '../actions/cattle';

const initialState = {
  cattle: [],
  error: null,
  fetching: false,
  fetched: false,
};

const cattle = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATTLE_PENDING:
      return handleFetchCattlePending(state);
    case FETCH_CATTLE_SUCCESS:
      return handleFetchCattleSuccess(state, action.cattle);
    case FETCH_CATTLE_ERROR:
      return handleFetchCattleError(state, action.error);
    case REGISTER_CATTLE_PENDING:
      return handleRegisterCattlePending(state);
    case REGISTER_CATTLE_SUCCESS:
      return handleRegisterCattleSuccess(state, action.cattle);
    case REGISTER_CATTLE_ERROR:
      return handleRegisterCattleError(state, action.error);
    case EXPAND_CATTLE_TOGGLE:
      return handleExpandCattleToggle(state, action.id);
    default:
      return state;
  }
};

export function handleFetchCattlePending(state) {
  return {
    ...state,
    fetching: true,
  };
};

const generateCattleObject = (cattle) => {
  return {
    cattle,
    expanded: false,
  }
};

export function handleFetchCattleSuccess(state, cattleRaw) {
  let cattle = [];
  for (let i in cattleRaw) {
    cattle.push(generateCattleObject(cattleRaw[i]));
  };

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
  };
};

export function handleRegisterCattlePending(state) {
  return {
    ...state,
  };
}

export function handleRegisterCattleSuccess(state, cattleNew) {
  let cattle = state.cattle;
  cattle.push(generateCattleObject(cattleNew))
  return {
    ...state,
    cattle,
  };
}

export function handleRegisterCattleError(state, error) {
  return {
    ...state,
    error,
  };
}

export function handleExpandCattleToggle(state, id) {
  let cattle = state.cattle;
  for (let i in cattle) {
    if (cattle[i].cattle.id === id) {
      cattle[i].expanded = !cattle[i].expanded;
    }
  }
  return {
    ...state,
    cattle
  }
};

export default cattle;
