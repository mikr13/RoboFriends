import React from 'react';

import '../../component-styles/SearchComponentStyle.css';

const Search = ({ searchChange }) => {

    return (
        <div className="tc pa2">
            <label htmlFor="searchrobot" className="visuallyhidden">SearchRobot</label>
            <input 
                className="pa3 mb4 br-pill ba b--light-green bg-washed-green"
                aria-label="searchrobot"
                type="search"
                id="searchrobot"
                name="searchrobot" 
                placeholder="search a cool robot" 
                onChange={searchChange}/>
        </div>
    );
}

export default Search;