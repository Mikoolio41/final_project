import React from "react";
import Exercise from "../components/Exercise";
import Image from "../components/Image";
import { useState, useEffect } from "react";

function UserPlan() {
  const [viewUserPlan, setViewUserPlan] = useState();

  const viewPlan = async () => {
    const response = await fetch("/userplan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: sessionStorage.getItem("userid"),
      }),
    });
    let json = await response.json();
    setViewUserPlan(json);
  };

  useEffect(() => {
    // insert training purpose query from db
    viewPlan();
  }, []);

  if (viewUserPlan) {
    return viewUserPlan.map((item, index) => {
      return (
        <div key={index}>
          <Exercise
            name={item.name}
            equipment={item.equipment}
            target={item.target}
          />
          <Image url={item.gifurl} />
        </div>
      );
    });
  } else {
    <div>Loading...</div>;
  }
}

export default UserPlan;
