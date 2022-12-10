import React from "react";
import PlanCard from "../components/PlanCard";
import styles from "../components/styles/PlanCard.module.css";
import { motion } from "framer-motion";

function MyPlans() {
  return (
    <motion.div
      className={styles.plancardHeaderContainer}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h1 className={styles.plansHeader}>MY PLANS</h1>
      <div className={styles.App}>
        <PlanCard />
      </div>
    </motion.div>
  );
}

export default MyPlans;
