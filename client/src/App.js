import React from "react";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./containers/AnimatedRoutes";
import "./styles/App.css";
import Footer from "./containers/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
