import React from 'react';

// import '../component-styles/CardComponentStyle.css';

const Card = (props) => {

    const robots = props.robots.map((robot) => {
        return (
            <div key={robot.id} className="bg-washed-green dib br3 pa2 ma2 grow bw1 shadow-5 bg-animate hover-bg-light-green">
                <img className="w-100" alt={`${robot.name}`} src={`https://robohash.org/${robot.id}?200x200`} />
                <div>
                    <h2>{robot.name}</h2>
                    <p>{robot.email}</p>
                </div>
            </div>
        );
    });

    return (
        <div>
            {robots}
        </div>
    );
}

export default Card;