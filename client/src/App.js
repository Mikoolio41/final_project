import React, { useEffect, useState } from "react";
// import UserInputForm from "./containers/UserInputForm";
import "./App.css";

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
    </div>
  );
}

export default App;
