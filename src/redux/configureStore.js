import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { searchARobot, requestRobotsReducer } from './reducers';

// const logger = createLogger();
const middlewares = [];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
   
    middlewares.push(logger);
}

middlewares.push(thunkMiddleware);

const rootReducer = combineReducers({ searchARobot, requestRobotsReducer });

export const ConfigureStore = () => {
    const store = createStore(
        rootReducer, // our root reducer
        applyMiddleware(...middlewares)
    );

    return store;
};