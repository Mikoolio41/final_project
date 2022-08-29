import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Image from "../src/components/Image";
import Homepage from "./containers/Homepage";
import Signup from "./containers/Signup";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/home" element={<Image />} />
    </Routes>
  </BrowserRouter>
);
