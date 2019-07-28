import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTooltip from "react-tooltip";

const MarkerComponent = props => {
  const K_WIDTH = 40;
  const K_HEIGHT = 40;

  const greatPlaceStyle = {
    position: "absolute",
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
    color: "#3f51b5",
    padding: 10
  };

  return (
    <div lat={props.lat} lng={props.lng} style={greatPlaceStyle}>
      <FontAwesomeIcon icon={["fas", "map-pin"]} size="2x" data-tip={props.text} />
      <ReactTooltip />
    </div>
  );
};

export default MarkerComponent;
