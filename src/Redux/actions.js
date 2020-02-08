import { getRequestAction } from 'Redux/shared';
import { APP_START } from 'Constants/actionNames';

export const appStart = getRequestAction(APP_START);
