import React from "react";
// import { router } from "/server/routes/plans";
import Input from "../components/Input.js";
import Gender from "../components/Gender.js";
import Goal from "../components/Goal.js";
import "../containers/UserInputForm.css";
import Birthdate from "../components/Birthdate.js";

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
          Height:
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
          Weight:
        </label>
      </div>
      <div className="input-container ic2">
        <input
          name="age"
          className="input"
          type="text"
          id="age"
          placeholder=" "
        />
        <div className="cut cut-short"></div>
        <label className="placeholder" for="age">
          Age:
        </label>
        <label className="gender" for="gender">
          You identify as:
        </label>
        <Gender className="gender" name="gender" />
        <label className="goal" for="goal">
          What's your training goal?
        </label>
        <Goal name="goal" />
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default UserInputForm;
