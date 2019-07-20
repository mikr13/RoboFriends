import React from "react";

import "../../component-styles/CardComponentStyle.css";

const Card = props => {
  const handleClick = (id) => {
    props.history.push(`Robot/${id}`);
  };

  const robots = props.robots.map(robot => {
    return (
        <div key={robot.id} className="bg-washed-green dib br3 pa2 mv3 mh2 grow bw1 shadow-5 bg-animate hover-bg-light-green" onClick={handleClick.bind(this, robot.id)}>
          <img
            className="w-100"
            alt={robot.name}
            src={`https://robohash.org/${
              robot.id
            }?size=300x300&set=set${props.number}`}
          />
          <div>
            <h2>{robot.name.slice(0, 20)}</h2>
            <p>{robot.email}</p>
            <p>
              <b>{robot.username}</b>
            </p>
          </div>
        </div>
    );
  });

  return (
    <React.Fragment>
        <div className="w-90 tc" style={{ margin: "0 auto" }}>
          {robots}
        </div>
    </React.Fragment>
  );
};

export default Card;
