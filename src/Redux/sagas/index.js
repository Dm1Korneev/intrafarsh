import { all, takeEvery } from 'redux-saga/effects';
import { APP_START, GET_ROUTES } from 'Constants/actionNames';

import { getRequestAction } from 'Redux/shared';

import appStartSaga from './appStartSaga';
import getRoutesSaga from './getRoutesSaga';

export default function* rootSaga() {
  yield all([
    yield takeEvery(getRequestAction(APP_START).type, appStartSaga),
    yield takeEvery(getRequestAction(GET_ROUTES).type, getRoutesSaga),
  ]);
}
