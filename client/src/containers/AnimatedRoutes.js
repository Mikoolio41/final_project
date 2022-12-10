import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Homepage";
import Signup from "./Signup";
import Login from "./Login";
import PurposeEquip from "./PurposeEquip";
import MyPlans from "./MyPlans";
import Logout from "./Logout";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<MyPlans />} />
        <Route path="/profile" element={<PurposeEquip />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
