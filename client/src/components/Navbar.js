import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          WorkItOut
        </Link>
        <input className={styles.menuBtn} type="checkbox" id={styles.menuBtn} />
        <label className={styles.menuIcon} for={styles.menuBtn}>
          <span className={styles.navicon}></span>
        </label>
        <ul className={styles.menu}>
          <li>
            <Link to="/plan">My Plans</Link>
          </li>
          <li>
            <Link to="/profile">Equipment & Purpose</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
