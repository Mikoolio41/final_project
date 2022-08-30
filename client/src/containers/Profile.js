import React from "react";
import Equipment from "../components/Equipment";
import TrainingPurpose from "../components/TrainingPurpose";
import { useState } from "react";

function Profile() {
  const [selectEquip, setSelectEquip] = useState([]);
  const getInfoEquip = (e) => {
    if (e.target.checked) {
      selectEquip[e.target.name] = e.target.value;
      setSelectEquip(selectEquip);
      console.log(selectEquip);

      // const [data, setData] = useState({
      //   first_name: "",
      //   last_name: "",
      //   email: "",
      //   password: "",
      // });
      // const handleChange = (event) => {
      //   data[event.target.name] = event.target.value;
      //   setData(data);
      // };
    }
  };
  return (
    <div>
      <Equipment handleChange={getInfoEquip} />
      <TrainingPurpose />
      {/* <button onClick={}>Create My Plan!</button> */}
    </div>
  );
}

export default Profile;
