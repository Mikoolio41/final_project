import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navContainer">
      <li className="logo">
        <Link to="/">WorkItOut</Link>
      </li>
      <li>
        <Link to="/plans">My Plans</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </div>
  );
}

export default Navbar;
