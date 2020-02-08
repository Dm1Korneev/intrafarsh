import { all, takeEvery } from 'redux-saga/effects';
import { APP_START } from 'Constants/actionNames';

import { getRequestAction } from 'Redux/shared';

import appStartSaga from './appStartSaga';

export default function* rootSaga() {
  yield all([
    yield takeEvery(getRequestAction(APP_START).type, appStartSaga),
  ]);
}
