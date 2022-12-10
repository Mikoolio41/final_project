import React from "react";
import Exercise from "../components/Exercise";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function UserPlan(props) {
  const [viewUserPlan, setViewUserPlan] = useState();

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
  }, []);

  // define different training target parameters
  if (viewUserPlan) {
    console.log(viewUserPlan);
    return viewUserPlan.map((item, index) => {
      return (
        <motion.div
          key={index}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          <Exercise
            name={item.name}
            equipment={item.equipment}
            bodypart={item.bodypart}
            target={item.target}
            sets={item.sets}
            reps={item.reps}
            rest={item.rest}
            url={item.gifurl}
          />
        </motion.div>
      );
    });
  } else {
    <div>Loading...</div>;
  }
}

export default UserPlan;
