import React from "react";
import Equipment from "../components/Equipment";
import TrainingPurpose from "../components/TrainingPurpose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  const [selectEquip, setSelectEquip] = useState(["body weight"]);
  const getInfoEquip = (e) => {
    if (e.target.checked) {
      selectEquip.push(e.target.value);
    } else {
      selectEquip.splice(selectEquip.indexOf(e.target.value), 1);
    }
    setSelectEquip(selectEquip);
    console.log(selectEquip);
  };

  const createEquipPlan = async () => {
    const response = await fetch("/createplan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectEquip),
    });
    console.log(await response.text());
  };

  const viewPlan = async () => {
    const response = await fetch("/userplan", {
      method: "GET",
    });
    console.log(await response.text());
  };

  return (
    <div>
      <Equipment handleChange={getInfoEquip} />
      <TrainingPurpose />
      <button onClick={createEquipPlan}>Create My Plan!</button>
      <button onClick={viewPlan}>view plan</button>
    </div>
  );
}

export default Profile;
