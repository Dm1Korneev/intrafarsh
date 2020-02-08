import { combineReducers } from '@reduxjs/toolkit';

import loading from './loading';
import loaded from './loaded';
import errors from './error';
import routes from './routes';

const rootReducer = combineReducers({
  loaded,
  loading,
  errors,
  routes,
});

export default rootReducer;

