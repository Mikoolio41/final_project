import React from "react";

function Gender() {
  return (
    <div className="gender">
      <input
        type="radio"
        value="Male"
        name="gender"
        style={{ color: "white" }}
      />{" "}
      Male
      <input
        className="femalebtn"
        type="radio"
        value="Female"
        name="gender"
        style={{ color: "white" }}
      />{" "}
      Female
      <input
        className="otherbtn"
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
