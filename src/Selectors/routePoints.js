import { createSelector } from '@reduxjs/toolkit';

export const routePointsSelector = (state) => state.routePoints;

export const routePointsByIdSelector = (state, routeID) => createSelector(
  routePointsSelector,
  (routePoints) => routePoints[routeID] || [],
)(state);

