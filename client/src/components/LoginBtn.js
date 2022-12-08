import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../containers/styles/Homepage.module.css";

function LoginBtn() {
  sessionStorage.setItem("key", "value");
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/login");
        }}
        className={`${styles.loginBtn}, ${styles.button64}`}
      >
        <span className="text">Login</span>
      </button>
    </div>
  );
}

export default LoginBtn;
