import { React, useState } from "react";
import "./Signup.css";

let regexPass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$");

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="form">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          let userLogin = {
            email: email,
            password: password.password,
          };
          const response = await fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userLogin),
          });
          console.log(await response.text());
        }}
      >
        <div className="title">Please login</div>
        {/* <div className="subtitle">Please insert your info:</div> */}
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
        <button className="submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
