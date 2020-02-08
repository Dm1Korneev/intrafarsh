import { createReducer } from '@reduxjs/toolkit';

import { setRoutePoints } from 'Redux/actions';

const defaultStore = {};

export default createReducer(defaultStore, (builder) => builder
  .addCase(setRoutePoints, (state, action) => ({
    ...state,
    [action.payload.routeID]: action.payload.routePoints,
  })));
