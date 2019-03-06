import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/">
    Personal
      </a>

      <a className="menu-item" href="/burgers">
      GROUP
      </a>

      <a className="menu-item" href="/pizzas">
      ORGANISATION
      </a>

      <a className="menu-item" href="/desserts">
        NOTIFICATION
      </a>
    </Menu>
  );
};
