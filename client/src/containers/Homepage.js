import React from "react";
import LoginBtn from "../components/LoginBtn";
import RegisterBtn from "../components/RegisterBtn";
import "../containers/styles/Homepage.css";

function Homepage() {
  return (
    <div className="container">
      <LoginBtn path="/login" />
      <RegisterBtn path="/register" />
    </div>
  );
}

export default Homepage;
