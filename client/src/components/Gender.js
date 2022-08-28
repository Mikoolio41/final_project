import React from "react";

function Gender(props) {
  return (
    <div className="gender">
      <label htmlFor="gender"></label>
      <input
        type="radio"
        value="Male"
        name="gender"
        style={{ color: "white" }}
        onChange={props.changeGender}
      />{" "}
      Male
      <label htmlFor="gender"></label>
      <input
        className="femalebtn"
        type="radio"
        value="Female"
        name="gender"
        style={{ color: "white" }}
        onChange={props.changeGender}
      />{" "}
      Female
      <label htmlFor="gender"></label>
      <input
        className="otherbtn"
        type="radio"
        value="Other"
        name="gender"
        style={{ color: "white" }}
        onChange={props.changeGender}
      />{" "}
      Other
    </div>
  );
}

export default Gender;
