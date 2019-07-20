import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { searchARobot, requestRobotsReducer, requestFavReducer } from './reducers';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
   
    middlewares.push(logger);
}

middlewares.push(thunkMiddleware);

const rootReducer = combineReducers({ searchARobot, requestRobotsReducer, requestFavReducer });

export const ConfigureStore = () => {
    const store = createStore(
        rootReducer, // our root reducer
        applyMiddleware(...middlewares)
    );

    return store;
};