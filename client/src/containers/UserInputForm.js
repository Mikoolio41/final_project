import React from "react";
import Birthdate from "../components/Birthdate.js";
// import { router } from "/server/routes/plans";
import Gender from "../components/Gender.js";
import "../containers/UserInputForm.css";

function UserInputForm() {
  return (
    <div className="form">
      <div className="title">Let me create your workout plan!</div>
      <div className="subtitle">Please insert your info:</div>
      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          id="height"
          name="height"
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder" for="height">
          Height in cm
        </label>
      </div>
      <div className="input-container ic2">
        <input
          type="text"
          id="weight"
          className="input"
          name="weight"
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder" for="weight">
          Weight in kg
        </label>
      </div>
      <div className="input-container ic2">
        <label className="labelBirthdate" for="birthday">
          Please enter your birthdate:
        </label>
        <Birthdate />
        <label className="labelGender" for="gender">
          You identify as:
        </label>
        <Gender name="gender" />
        <label className="goal labelGoal" for="goal">
          What's your training goal?
        </label>
        {/* <Goal name="goal" /> */}
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default UserInputForm;
