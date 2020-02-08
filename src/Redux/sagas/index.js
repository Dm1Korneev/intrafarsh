import { all, takeEvery } from 'redux-saga/effects';
import { GET_ROUTES, GET_ROUTE_POINTS } from 'Constants/actionNames';

import { getRequestAction } from 'Redux/shared';

import getRoutesSaga from './getRoutesSaga';
import getRoutePointsSaga from './getRoutePointsSaga';

export default function* rootSaga() {
  yield all([
    yield takeEvery(getRequestAction(GET_ROUTES).type, getRoutesSaga),
    yield takeEvery(getRequestAction(GET_ROUTE_POINTS).type, getRoutePointsSaga),
  ]);
}
