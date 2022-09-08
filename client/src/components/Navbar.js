import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navContainer">
      <li>
        <Link to="/">Homepage</Link>
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
