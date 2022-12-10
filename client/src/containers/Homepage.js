import React from "react";
import LoginBtn from "../components/LoginBtn";
import RegisterBtn from "../components/RegisterBtn";
import styles from "./styles/Homepage.module.css";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <motion.div
      className={styles.container}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className={styles.buttonContainer}>
        <LoginBtn path="/login" />
        <RegisterBtn path="/register" />
      </div>
    </motion.div>
  );
}

export default Homepage;
