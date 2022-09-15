import React from "react";
import Equipment from "../components/Equipment";
import TrainingPurpose from "../components/TrainingPurpose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../containers/styles/Signup.module.css";

function Profile() {
  let navigate = useNavigate();
  // const [selectTarget, setSelectTarget] = useState([]);
  const [selectEquip, setSelectEquip] = useState(["body weight"]);
  const [infoTarget, setInfoTarget] = useState();

  const getInfoEquip = (e) => {
    if (e.target.checked) {
      selectEquip.push(e.target.value);
    } else {
      selectEquip.splice(selectEquip.indexOf(e.target.value), 1);
    }
    setSelectEquip(selectEquip);
    console.log(selectEquip);
  };

  const getInfoTarget = (e) => {
    setInfoTarget(e.target.value);
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

  const insertUserTarget = async () => {
    console.log(infoTarget);
    const result = await fetch("/user_target", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: sessionStorage.getItem("userid"),
        target_id: infoTarget,
      }),
    });
    let targetSelected = await result.text();
    if (targetSelected === "target inserted") {
      console.log("succeeded");
    }
    navigate("/plan");
  };

  return (
    <div>
      <Navbar />
      <Equipment handleChange={getInfoEquip} />{" "}
      <button className={styles.createBtn} onClick={createEquipPlan}>
        Create My Plan!
      </button>
      <TrainingPurpose handleChange={getInfoTarget} />
      <button className={styles.navigateBtn} onClick={insertUserTarget}>
        Take me to my plan!
      </button>
    </div>
  );
}

export default Profile;
