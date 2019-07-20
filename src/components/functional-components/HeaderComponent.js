import React from "react";

const Header = props => {
  return props.isPending ? (
    <h1 className="tc f1 lh-copy">{props.title}</h1>
  ) : (
    <h1 className="tc f2 lh-copy">{props.title}</h1>
  );
};

export default Header;
