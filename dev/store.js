// Redux store
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers_ from './reducers/_index';
import {
  fetchToken
} from './actions/_index';

let reducers = combineReducers({ ...reducers_ });
let middleware = applyMiddleware(thunk, logger());

let store = createStore(reducers, middleware);

store.dispatch(fetchToken());

export default store;
