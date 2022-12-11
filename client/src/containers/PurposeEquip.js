import React from "react";
import Equipment from "../components/Equipment";
import TrainingPurpose from "../components/TrainingPurpose";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../containers/styles/PurposeEquip.module.css";
import { motion } from "framer-motion";

function Profile() {
  let navigate = useNavigate();
  const [selectEquip, setSelectEquip] = useState(["body weight"]);
  const [infoTarget, setInfoTarget] = useState();

  const getInfoEquip = (e) => {
    if (e.target.checked) {
      selectEquip.push(e.target.value);
    } else {
      selectEquip.splice(selectEquip.indexOf(e.target.value), 1);
    }
    setSelectEquip(selectEquip);
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
        target_id: infoTarget,
      }),
    });
    let planCreated = await response.text();
    if (planCreated === "yay") {
      navigate("/plan");
    }
  };

  return (
    <motion.div
      className={styles.purposeEquipContainer}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h1 className={`${styles.headers} ${styles.headerGoal}`}>
        What is my goal?
      </h1>
      <TrainingPurpose handleChange={getInfoTarget} />
      <h1 className={`${styles.headers} ${styles.headerEquip}`}>
        What do i own at home?
      </h1>
      <Equipment handleChange={getInfoEquip} />{" "}
      <button
        className={`${styles.bn632Hover} ${styles.bn20}`}
        onClick={createEquipPlan}
      >
        Create My Plan!
      </button>
    </motion.div>
  );
}

export default Profile;
