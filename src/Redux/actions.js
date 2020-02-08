import { createAction } from '@reduxjs/toolkit';

import { getRequestAction } from 'Redux/shared';
import { APP_START, GET_ROUTES, SET_ROUTES } from 'Constants/actionNames';

export const appStart = getRequestAction(APP_START);

export const getRoutes = getRequestAction(GET_ROUTES);

export const setRoutes = createAction(SET_ROUTES);
