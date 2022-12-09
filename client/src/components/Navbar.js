import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        WorkItOut
      </Link>
      <ul>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Equipment & Purpose</Link>
        </li>
        <li>
          <Link to="/plan">My Plans</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
