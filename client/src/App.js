import React, { useEffect, useState } from "react";

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
    </div>
  );
}

export default App;
