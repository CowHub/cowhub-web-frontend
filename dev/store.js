// Redux store
import { createStore, combineReducers } from 'redux';

// TODO: Import reducers and replace the default_ reducer below

let default_ = (state = [], action) => {
  switch (action.type) {
  default:
    return state
  }
}

let reducers = combineReducers([ default_ ]);
export default createStore(reducers);
