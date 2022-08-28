import React from "react";
import LoginBtn from "../components/LoginBtn";
import RegisterBtn from "../components/RegisterBtn";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container">
      <LoginBtn />
      <RegisterBtn path="/register" />
    </div>
  );
}

export default Homepage;
