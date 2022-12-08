import React from "react";
import PlanCard from "../components/PlanCard";
// import UserPlan from "./UserPlan";
import styles from "../components/styles/PlanCard.module.css";

function MyPlans() {
  return (
    <>
      <h1 className={styles.plansHeader}>MY PLANS</h1>
      <div className={styles.App}>
        <PlanCard />
      </div>
    </>
  );
}

export default MyPlans;
