import { call, put } from 'redux-saga/effects';
import { getFailureAction, getSuccessAction } from 'Redux/shared';
import { setRoutePoints } from 'Redux/actions';
import { GET_ROUTE_POINTS } from 'Constants/actionNames';
import { getRoutePoints } from 'API/requests';

export default function* getRoutePointsSaga(action) {
  const { routeID } = action.payload;

  try {
    const routePoints = yield call(getRoutePoints, { routeID });
    yield put(setRoutePoints({ routePoints, routeID }));
    yield put(getSuccessAction(GET_ROUTE_POINTS)({ routePoints }));
  } catch (error) {
    yield put(getFailureAction(GET_ROUTE_POINTS)({ error: error.message }));
  }
}
