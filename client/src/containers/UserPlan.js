import React from "react";
import Exercise from "../components/Exercise";
import { useState, useEffect } from "react";
// import styles from "./styles/UserPlan.module.css";

function UserPlan(props) {
  const [viewUserPlan, setViewUserPlan] = useState();
  let planTarget;

  const viewPlan = async () => {
    const response = await fetch("/userplan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: sessionStorage.getItem("userid"),
        target_id: props.target_id,
      }),
    });
    let json = await response.json();
    setViewUserPlan(json);
  };

  // insert training purpose query to db
  useEffect(() => {
    viewPlan();
  });

  // define different training target parameters
  if (viewUserPlan) {
    return viewUserPlan.map((item, index) => {
      switch (item.target_id) {
        case 1:
          planTarget = { sets: 5, reps: 8, rest: 90 };
          break;
        case 2:
          planTarget = { sets: 4, reps: 10, rest: 45 };
          break;
        case 3:
          planTarget = { sets: 4, reps: 15, rest: 60 };
          break;
        case 4:
          planTarget = { sets: 3, reps: 12, rest: 60 };
          break;
        default:
          planTarget = { sets: 3, reps: 12, rest: 60 };
          break;
      }
      return (
        <div key={index}>
          <Exercise
            name={item.name}
            equipment={item.equipment}
            bodypart={item.bodypart}
            target={item.target}
            sets={planTarget.sets}
            reps={planTarget.reps}
            rest={planTarget.rest}
            url={item.gifurl}
          />
        </div>
      );
    });
  } else {
    <div>Loading...</div>;
  }
}

export default UserPlan;
