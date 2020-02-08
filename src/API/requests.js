import { apiCall, getBody } from './utils';

export const swagger = () => apiCall(getBody('Swagger'));

export const getRoutes = () => apiCall(getBody('Routes'));
