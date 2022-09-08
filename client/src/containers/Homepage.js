import React from "react";
import LoginBtn from "../components/LoginBtn";
import RegisterBtn from "../components/RegisterBtn";
import "./Homepage.css";
import Navbar from "../components/Navbar";

function Homepage() {
  return (
    <div className="container">
      <Navbar />
      <LoginBtn path="/login" />
      <RegisterBtn path="/register" />
    </div>
  );
}

export default Homepage;
