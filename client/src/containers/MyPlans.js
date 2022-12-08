import React from "react";
import PlanCard from "../components/PlanCard";
import styles from "../components/styles/PlanCard.module.css";

function MyPlans() {
  return (
    <div className={styles.plancardHeaderContainer}>
      <h1 className={styles.plansHeader}>MY PLANS</h1>
      <div className={styles.App}>
        <PlanCard />
      </div>
    </div>
  );
}

export default MyPlans;
