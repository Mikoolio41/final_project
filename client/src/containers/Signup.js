import React from "react";
import Birthdate from "../components/Birthdate.js";
// import { router } from "/server/routes/plans";
import Gender from "../components/Gender.js";
import "./UserInputForm.css";
import { useState } from "react";

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

let regexPass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$");

// let testPass = ["mika345", "Ha489!@-fsdkjf", "Gyhfdkd398402", "fjdsjhO934?$"];

// testPass.forEach((pass) => {
//   console.log(regexPass.test(pass));
// });

function Signup() {
  const [formData, updateFormData] = React.useState(null);
  const [pass, setPass] = useState(null);
  // const [touched, setTouched] = React.useState(false);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formData);
      }}
    >
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
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="placeholder" htmlFor="first_name">
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
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="placeholder" htmlFor="last_name">
            Last Name
          </label>
        </div>
        <div className="input-container ic1">
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            placeholder=" "
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="placeholder" htmlFor="email">
            Email
          </label>
        </div>
        <div className="input-container ic1">
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            placeholder=" "
            onBlur={(e) => {
              if (e.target.value.match(regexPass) != null) {
                setPass({ password: e.target.value });
              } else {
                alert(`1 Uppercase\n1 Lowercase\n1 Digit\n8-15 Characters`);
              }
            }}
          />
          <div className="cut"></div>
          <label className="placeholder" htmlFor="password">
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
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="placeholder" htmlFor="height">
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
            onChange={handleChange}
          />
          <div className="cut"></div>
          <label className="placeholder" htmlFor="weight">
            Weight in kg
          </label>
        </div>
        <div className="input-container ic2">
          <label className="labelBirthdate" htmlFor="birthday">
            Please enter your birthdate:
          </label>
          <Birthdate onChange={handleChange} />
          <div className="input-container ic2">
            <label className="labelGender" htmlFor="gender">
              You identify as:
            </label>
            <Gender onChange={handleChange} name="gender" />
          </div>
          {/* <label className="goal labelGoal" htmlFor="goal">
          What's your training goal?
        </label> */}
          {/* <Goal name="goal" /> */}
          <button className="submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Signup;
