import React from "react";

const Header = props => {
  if (props.isPending) {
    return <h1 className="tc f1 lh-copy">{props.title}</h1>;
  } else {
    return <h1 className="tc f2 lh-copy">{props.title}</h1>;
  }
};

export default Header;
