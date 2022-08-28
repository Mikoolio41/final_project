import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Image from "../src/components/Image";
import Homepage from "./containers/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/home" element={<Image />} />
      {/* <Route path="/" element={<Form />} /> */}
    </Routes>
  </BrowserRouter>
);
