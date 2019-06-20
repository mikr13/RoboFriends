import { 
    changeSearchField,
    requestRobots_Pending,
    requestRobots_Success,
    requestRobots_Failed
 } from './constants.redux';

export const setSearchField = (text) => ({
    type: changeSearchField,
    payload: text
});

export const requestRobots = () => (dispath) => {
    dispath({ type: requestRobots_Pending});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispath({ type: requestRobots_Success, payload: data }))
        .catch(error => dispath({ type: requestRobots_Failed, payload: error }));
};
