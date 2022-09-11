import React from "react";
import Equipment from "../components/Equipment";
import TrainingPurpose from "../components/TrainingPurpose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Profile() {
  let navigate = useNavigate();
  // const [selectTarget, setSelectTarget] = useState([]);
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
      body: JSON.stringify({
        equipment: selectEquip,
        userid: sessionStorage.getItem("userid"),
      }),
    });
    console.log();
    let planCreated = await response.text();
    if (planCreated === "yay") {
      navigate("/userplan");
    }
  };

  const insertUserTarget = async (e) => {
    console.log(e.target.value);
    const result = await fetch("/user_target", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: sessionStorage.getItem("userid"),
        target_id: e.target.value,
      }),
    });
    let targetSelected = await result.text();
    if (targetSelected === "target inserted") {
      console.log("succeeded");
    }
  };

  return (
    <div>
      <Navbar />
      <Equipment handleChange={getInfoEquip} />
      <TrainingPurpose handleChange={insertUserTarget} />
      <button onClick={createEquipPlan}>Create My Plan!</button>
      <button onClick={() => navigate("/plan")}>view plan</button>
    </div>
  );
}

export default Profile;
