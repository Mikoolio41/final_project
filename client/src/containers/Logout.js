import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Logout() {
  let navigate = useNavigate();
  const userLogout = () => {
    sessionStorage.clear("userid");
    navigate("/login");
  };
  useEffect(() => {
    userLogout();
  }, []);
  return <div></div>;
}

export default Logout;
