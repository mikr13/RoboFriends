import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { searchARobot, requestRobotsReducer } from './reducers';

const logger = createLogger();

const rootReducer = combineReducers({ searchARobot, requestRobotsReducer });

export const ConfigureStore = () => {
    const store = createStore(
        rootReducer, // our root reducer
        applyMiddleware(logger, thunkMiddleware)
    );

    return store;
};