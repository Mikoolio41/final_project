import React from "react";
// import { router } from "/server/routes/plans";
import Input from "../components/Input.js";
import LoginButton from "../components/LoginButton.js";

function Form() {
  return (
    <div>
      <form>
        <label for="first_name">
          First Name
          <Input
            name="first_name"
            placeholder="First Name"
            value=""
            onChange=""
          />
        </label>
        <label for="last_name">
          Last Name
          <Input
            name="first_name"
            placeholder="Last Name"
            value=""
            onChange=""
          />
        </label>
        <LoginButton />
      </form>
    </div>
  );
}

export default Form;
