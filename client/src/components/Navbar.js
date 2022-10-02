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
    <div className={styles.navbar}>
      <div
        className={`${styles.navContainer} ${styles.container}`}
        style={showNav}
      >
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
      <input
        className={styles.checkbox}
        type="checkbox"
        name=""
        id=""
        style={showMenuIcon}
      />
      <div className={styles.hamburgerLines}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
    </div>
  );
}

export default Navbar;
