import React from "react";
import PlanCard from "../components/PlanCard";
import styles from "../components/styles/PlanCard.module.css";
import { motion } from "framer-motion";

function MyPlans() {
  return (
    <motion.div
      className={styles.plancardHeaderContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className={styles.plansHeader}>MY PLANS</h1>
      <div className={styles.App}>
        <PlanCard />
      </div>
    </motion.div>
  );
}

export default MyPlans;
