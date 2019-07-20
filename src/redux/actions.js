import { 
    changeSearchField,
    requestRobots_Pending,
    requestRobots_Success,
    requestRobots_Failed,
    requestFavs
 } from './constants.redux';

const items = localStorage.getItem('favs');
let cachedFav = items === undefined || items === null || !Array.isArray(JSON.parse(items)) ? [] : JSON.parse(items);

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

export const requestFav = () => (dispath) => {
    dispath({ type: requestFavs, payload: cachedFav})
}