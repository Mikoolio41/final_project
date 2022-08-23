import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./containers/form";
import Image from "../src/components/Image";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-qty-2pbd.us.auth0.com"
    clientId="ziamzTIdEHVG6zg6KF1QbLLo2lGu3bag"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Image />} />
        {/* <Route path="/" element={<Form />} /> */}
      </Routes>
    </BrowserRouter>
  </Auth0Provider>
);
