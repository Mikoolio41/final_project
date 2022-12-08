import React from "react";
import LoginBtn from "../components/LoginBtn";
import RegisterBtn from "../components/RegisterBtn";
import styles from "./styles/Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <LoginBtn path="/login" />
        <RegisterBtn path="/register" />
      </div>
    </div>
  );
}

export default Homepage;
