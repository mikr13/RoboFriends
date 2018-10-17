import React from 'react';

import '../component-styles/ScrollComponentStyle.css';


const Scroll = (props) => {

// Scroll will use children that is 3rd feature in list of props and state

    return (
        <div className="scroll">
            {props.children}
        </div>
    );
}

export default Scroll;