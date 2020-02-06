import cocktailsSaga from './cocktails.sagas';

const sagas = [cocktailsSaga];

export const initSagas = (sagaMiddleware: any): void =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
