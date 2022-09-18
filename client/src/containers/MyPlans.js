import React from "react";
// import Exercise from "../components/Exercise";
// import PlanCard from "../components/PlanCard";
import UserPlan from "./UserPlan";

function MyPlans() {
  return (
    <div className="App">
      <h1>MY PLANS</h1>
      <UserPlan user_id={sessionStorage.getItem("userid")} />
    </div>
  );
}

export default MyPlans;
