import React, { useEffect, useState } from "react";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Form from "./containers/form";

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
      <Form />
      <LogoutButton />
      <Profile />
    </div>
  );
}

export default App;
