import React from "react";
import PlanCard from "../components/PlanCard";
// import UserPlan from "./UserPlan";
import styles from "../components/styles/PlanCard.module.css";

function MyPlans() {
  return (
    <div className={styles.App}>
      <h1>MY PLANS</h1>
      <PlanCard />
    </div>
  );
}

export default MyPlans;
