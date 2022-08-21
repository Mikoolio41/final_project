import React from "react";
// import { router } from "/server/routes/plans";
import Input from "../components/Input.js";

function Form() {
  return (
    <div>
      <form>
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
