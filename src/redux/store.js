import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const reduxDevTools =
  (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
  compose;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares), reduxDevTools),
);

sagaMiddleware.run(rootSaga);

export default store;
