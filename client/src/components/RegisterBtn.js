import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../containers/styles/Homepage.module.css";

function RegisterBtn() {
  let navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/register");
        }}
        className={`${styles.registerBtn}, ${styles.button64}`}
      >
        <span className="text">Sign Up</span>
      </button>
    </div>
  );
}

export default RegisterBtn;
