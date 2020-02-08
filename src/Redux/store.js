import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import errorMiddleware from './middlewares/error';
import rootReducer from './reducers';
import rootSaga from './sagas';

const storeFactory = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), errorMiddleware, sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default storeFactory;
