import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

function Navbar({ showTopNavMenu }) {
  const showNav = {
    display: showTopNavMenu ? "flex" : "none",
  };
  const showMenuIcon = {
    display: showTopNavMenu ? "none" : "flex",
  };
  return (
    <div className={styles.navContainer} style={showNav}>
      <li className={`${styles.listItem} ${styles.line}`}>
        <Link to="/">WorkItOut</Link>
      </li>
      <li className={`${styles.listItem} ${styles.line} ${styles.line1}`}>
        <Link to="/plan">My Plans</Link>
      </li>
      <li className={`${styles.listItem} ${styles.line} ${styles.line2}`}>
        <Link to="/profile">My Profile</Link>
      </li>
      <li className={`${styles.listItem} ${styles.line} ${styles.line3}`}>
        <Link to="/logout">Logout</Link>
      </li>
      <span className={styles.hamburgerLines} style={showMenuIcon} />
    </div>
  );
}

export default Navbar;
