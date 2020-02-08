import { apiCall, getBody } from './utils';

export const swagger = () => apiCall(getBody('Swagger'));

export const getRoutes = () => apiCall(getBody('Routes'));

export const getRoutePoints = ({ routeID }) => apiCall(getBody('RoutePoints', { RouteID: routeID }));
