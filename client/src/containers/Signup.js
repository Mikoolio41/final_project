import React from "react";
import Gender from "../components/Gender.js";
import "./UserInputForm.css";
import { useState } from "react";

let regexPass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$");

function Signup() {
  // const [formData, updateFormData] = React.useState();
  // const [pass, setPass] = useState();
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [gender, setGender] = useState();
  const [birthdate, setBirthdate] = useState();

  // const handleChange = (e) => {
  //   updateFormData({
  //     // ...formData,
  //     [e.target.name]: e.target.value.trim(),

  //   });
  // };

  const changeGender = (e) => {
    console.log(e.target.value);
    setGender(e.target.value);
  };

  return (
    <div className="form">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          let userObj = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password.password,
            height: height,
            weight: weight,
            gender: gender,
            birthdate: birthdate,
          };
          console.log(userObj);
          const response = await fetch("/register", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: `{ "userToDb": "${userObj}" }`,
          });
          console.log(await response.text());
        }}
      >
        <div className="title">Please fill out the info below</div>
        {/* <div className="subtitle">Please insert your info:</div> */}
        <div className="input-container ic1">
          <input
            className="input"
            type="text"
            id="first_name"
            name="first_name"
            placeholder=" "
            onChange={(e) => setFirst_name(e.target.value)}
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
            onChange={(e) => setLast_name(e.target.value)}
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
            onChange={(e) => setEmail(e.target.value)}
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
                setPassword({ password: e.target.value });
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
            onChange={(e) => setHeight(e.target.value)}
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
            onChange={(e) => setWeight(e.target.value)}
          />
          <div className="cut"></div>
          <label className="placeholder" htmlFor="weight">
            Weight in kg
          </label>
        </div>
        <label className="labelBirthdate" htmlFor="birthday">
          Please enter your birthdate:
        </label>
        <div className="input-container ic2">
          <input
            type="date"
            id="birthdate"
            className="input"
            name="birthdate"
            placeholder=" "
            onChange={(e) => setBirthdate(e.target.value)}
          />
        </div>
        <div className="input-container ic2">
          <label className="labelGender" htmlFor="gender">
            You identify as:
          </label>
          <Gender changeGender={changeGender} name="gender" />
        </div>
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
