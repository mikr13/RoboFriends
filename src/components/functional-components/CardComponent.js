import React from 'react';

const Card = (props) => {

    const robots = props.robots.map((robot) => {
        return (
            <div key={robot.id} className="bg-washed-green dib br3 pa2 mv3 mh2 grow bw1 shadow-5 bg-animate hover-bg-light-green">
                <img className="w-100" alt={robot.name} src={`https://robohash.org/${robot.id}?200x200`} />
                <div>
                    <h2>{(robot.name).slice(0, 20)}</h2>
                    <p>{robot.email}</p>
                    <p><b>{robot.username}</b></p>
                </div>
            </div>
        );
    });

    return (
        <div className="w-90 tc" style={{margin: "0 auto"}}>
            {robots}
        </div>
    );
}

export default Card;