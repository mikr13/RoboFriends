import { 
    changeSearchField,
    requestRobots_Pending,
    requestRobots_Success,
    requestRobots_Failed
 } from './constants.redux';

export const initialState = {
    search: "",
}

export const searchARobot = (state = initialState, action= {}) => {
    switch(action.type) {
        case changeSearchField:
            return Object.assign({}, state, {search: action.payload})
            // or return { ...state, search: action.payload }
        default:
            return state;
    }
}

export const initialStateforRobots = {
    robots: [],
    isPending: false,
    error: ''
}

export const requestRobotsReducer = (state = initialStateforRobots, action = {}) => {
    switch(action.type) {
        case requestRobots_Pending:
            return Object.assign({}, state, { isPending: true })
        case requestRobots_Success:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case requestRobots_Failed:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}