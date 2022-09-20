import React from "react";
import LoginBtn from "../components/LoginBtn";
import RegisterBtn from "../components/RegisterBtn";
import "../containers/styles/Homepage.css";
import Navbar from "../components/styles/Navbar.css";

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
