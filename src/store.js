// @flow

import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk, createLogger()];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
