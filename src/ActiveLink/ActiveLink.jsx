import React from "react";
import "./ActiveLink.css";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink to={to} activeClassName="active" exact>
      {children}
    </NavLink>
  );
};

export default ActiveLink;
