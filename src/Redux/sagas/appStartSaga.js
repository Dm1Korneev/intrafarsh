import { call, put } from 'redux-saga/effects';
import { getFailureAction, getSuccessAction } from 'Redux/shared';
import { APP_START } from 'Constants/actionNames';
import { swagger } from 'API/requests';

export default function* getRatesSaga() {
  try {
    const result = yield call(swagger);
    yield put(getSuccessAction(APP_START)({ result }));
  } catch (error) {
    yield put(getFailureAction(APP_START)({ error: error.message }));
  }
}
