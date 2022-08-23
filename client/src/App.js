import React, { useEffect, useState } from "react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  const [url, setUrl] = useState([{}]);
  useEffect(() => {
    fetch("/picture")
      .then((response) => response.json())
      .then((data) => {
        setUrl(data);
      });
  }, []);

  return (
    <div>
      <img alt="" src={url}></img>
      <h1>hi</h1>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
