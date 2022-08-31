import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import UserPlan from "./containers/UserPlan";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/plan" element={<UserPlan />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);
