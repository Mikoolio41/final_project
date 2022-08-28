import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterBtn() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/register");
        }}
        className="registerBtn button-64"
      >
        <span class="text">Register</span>
      </button>
    </div>
  );
}

export default RegisterBtn;
