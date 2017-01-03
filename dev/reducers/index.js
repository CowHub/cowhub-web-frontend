import { combineReducers } from 'redux';

import authentication from './authentication';
import cattle from './cattle';
import identification from './identification';

const reducers = combineReducers({
  authentication,
  cattle,
  identification,
});

export default reducers;
