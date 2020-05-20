import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './rootReducer';

const middlewares = [];

const reduxDevTools =
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
	compose;

const store = createStore(
	rootReducer,
	compose(applyMiddleware(...middlewares), reduxDevTools),
);

export default store;
