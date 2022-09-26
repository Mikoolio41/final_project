import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <li className={styles.listItem}>
        <Link to="/">WorkItOut</Link>
      </li>
      <li className={styles.listItem}>
        <Link to="/plan">My Plans</Link>
      </li>
      <li className={styles.listItem}>
        <Link to="/profile">My Profile</Link>
      </li>
      <li className={styles.listItem}>
        <Link to="/logout">Logout</Link>
      </li>
    </div>
  );
}

export default Navbar;
