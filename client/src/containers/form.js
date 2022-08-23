import React from "react";
// import { router } from "/server/routes/plans";
import Input from "../components/Input.js";
import LoginButton from "../components/LoginButton.js";

function Form() {
  return (
    <div>
      <form>
        <LoginButton />
        <Input
          name="first_name"
          placeholder="First Name"
          value=""
          onChange=""
        />
      </form>
    </div>
  );
}

export default Form;
