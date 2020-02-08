import { combineReducers } from '@reduxjs/toolkit';

import loading from './loading';
import loaded from './loaded';
import errors from './error';

const rootReducer = combineReducers({
  loaded,
  loading,
  errors,
});

export default rootReducer;

