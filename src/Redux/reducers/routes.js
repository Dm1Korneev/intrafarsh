import { createReducer } from '@reduxjs/toolkit';

import { setRoutes } from 'Redux/actions';

const defaultStore = [];

export default createReducer(defaultStore, (builder) => builder
  .addCase(setRoutes, (state, action) => action.payload.routes));
