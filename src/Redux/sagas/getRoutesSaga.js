import { call, put } from 'redux-saga/effects';
import { getFailureAction, getSuccessAction } from 'Redux/shared';
import { setRoutes } from 'Redux/actions';
import { GET_ROUTES } from 'Constants/actionNames';
import { getRoutes } from 'API/requests';

export default function* getRatesSaga() {
  try {
    const routes = yield call(getRoutes);
    yield put(setRoutes({ routes }));
    yield put(getSuccessAction(GET_ROUTES)({ routes }));
  } catch (error) {
    yield put(getFailureAction(GET_ROUTES)({ error: error.message }));
  }
}
