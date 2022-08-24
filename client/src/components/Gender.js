import React from "react";

function Gender() {
  return (
    <div>
      <input
        type="radio"
        value="Male"
        name="gender"
        style={{ color: "white" }}
      />{" "}
      Male
      <input
        type="radio"
        value="Female"
        name="gender"
        style={{ color: "white" }}
      />{" "}
      Female
      <input
        type="radio"
        value="Other"
        name="gender"
        style={{ color: "white" }}
      />{" "}
      Other
    </div>
  );
}

export default Gender;
