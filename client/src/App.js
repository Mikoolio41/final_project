import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./containers/Homepage";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Navbar from "./components/Navbar";
import MyPlans from "./containers/MyPlans";
import Logout from "./containers/Logout";

function App() {
  // const [width, setWindowWidth] = useState(0);
  // useEffect(() => {
  //   updateDimensions();

  //   window.addEventListener("resize", updateDimensions);
  //   return () => window.removeEventListener("resize", updateDimensions);
  // }, []);

  // const updateDimensions = () => {
  //   const width = window.innerWidth;
  //   setWindowWidth(width);
  // };

  // const responsive = {
  //   showTopNavMenu: width > 1023,
  // };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plan" element={<MyPlans />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
