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
        <Input
          id="height"
          className="input"
          type="text"
          name="height"
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder" for="height">
          Height:
        </label>
      </div>
      <div className="input-container ic2">
        <Input
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
        <Birthdate type="date" name="birthday" />
        <div className="cut cut-short"></div>
        <label className="placeholder" for="birthday">
          Birth date:
        </label>
        <Gender className="" />
        <Goal />
        <button className="submit" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default UserInputForm;
