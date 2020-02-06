import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './modules';

import { initSagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware(), sagaMiddleware];
if (__DEV__) {
    middleware.push(logger);
}
const store = configureStore({
    reducer: rootReducer,
    middleware,
});

initSagas(sagaMiddleware);

export { store };
