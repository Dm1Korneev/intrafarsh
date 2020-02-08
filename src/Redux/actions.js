import { createAction } from '@reduxjs/toolkit';

import { getRequestAction } from 'Redux/shared';
import {
  APP_START, GET_ROUTES, GET_ROUTE_POINTS, SET_ROUTES, SET_ROUTE_POINTS,
} from 'Constants/actionNames';

export const appStart = getRequestAction(APP_START);

export const getRoutes = getRequestAction(GET_ROUTES);
export const setRoutes = createAction(SET_ROUTES);

export const getRoutePoints = getRequestAction(GET_ROUTE_POINTS);
export const setRoutePoints = createAction(SET_ROUTE_POINTS);
