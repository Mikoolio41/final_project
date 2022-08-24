import React, { useEffect, useState } from "react";
// import LogoutButton from "./components/LogoutButton";
// import Profile from "./components/Profile";
import UserInputForm from "./containers/UserInputForm";

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
      {/* <img alt="" src={url}></img> */}
      <UserInputForm />
      {/* <LogoutButton /> */}
      {/* <Profile /> */}
    </div>
  );
}

export default App;
