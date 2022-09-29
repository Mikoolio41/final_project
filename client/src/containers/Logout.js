import React from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";

function Logout() {
  let navigate = useNavigate();
  const userLogout = () => {
    sessionStorage.clear("userid");
    navigate("/");
  };
  useEffect(() => {
    userLogout();
  }, []);
  return <div></div>;
}

export default Logout;
