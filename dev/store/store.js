// Redux store
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from '../reducers/index';
import {
  fetchToken,
  removeToken,
} from '../actions/index';

let middleware = (process.env.NODE_ENV !== 'production') ?
    applyMiddleware(thunk, logger()) :
    applyMiddleware(thunk);

const store = createStore(reducers, middleware);

// Get token if one exists
store.dispatch(fetchToken());

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../reducers', () => {
    const nextReducers = require('../reducers/index');
    store.replaceReducer(nextReducers);
    console.clear()
  });
}

export default store;
