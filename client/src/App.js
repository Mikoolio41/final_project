import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import PurposeEquip from "./containers/PurposeEquip";
import Navbar from "./components/Navbar";
import MyPlans from "./containers/MyPlans";
import Logout from "./containers/Logout";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<MyPlans />} />
        <Route path="/profile" element={<PurposeEquip />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
