import React from "react";
import { useNavigate } from "react-router-dom";

function LoginBtn() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/login");
        }}
        className="loginBtn button-64"
      >
        <span className="text">Login</span>
      </button>
    </div>
  );
}

export default LoginBtn;
