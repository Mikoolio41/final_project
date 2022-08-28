import React from "react";
import Birthdate from "../components/Birthdate.js";
// import { router } from "/server/routes/plans";
import Gender from "../components/Gender.js";

// user and password
// regex

// let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

// let testEmails = [
//   "notanemail.com",
//   "workingexample@email.com",
//   "another_working@somethingelse.org",
//   "notworking@1.com",
// ];

// testEmails.forEach((address) => {
//   console.log(regexEmail.test(address));
// });

// let regexPass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$");

// let testPass = ["mika345", "Ha489!@-fsdkjf", "Gyhfdkd398402", "fjdsjhO934?$"];

// testPass.forEach((pass) => {
//   console.log(regexPass.test(pass));
// });

function Signup() {
  return (
    <div className="form">
      <div className="title">Please fill out the info below</div>
      {/* <div className="subtitle">Please insert your info:</div> */}
      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          id="first_name"
          name="first_name"
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder" for="first_name">
          First Name
        </label>
      </div>
      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          id="last_name"
          name="last_name"
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder" for="last_name">
          Last Name
        </label>
      </div>
      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          id="email"
          name="email"
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder" for="email">
          Email
        </label>
      </div>
      <div className="input-container ic1">
        <input
          className="input"
          type="text"
          id="password"
          name="password"
          placeholder=" "
        />
        <div className="cut"></div>
        <label className="placeholder" for="password">
          Password
        </label>
      </div>
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

export default Signup;
