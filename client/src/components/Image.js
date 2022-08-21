import React from "react";
import { useState } from "react";

function Image() {
  const [url, setUrl] = useState("");
  fetch("/picture")
    .then((response) => response.json())
    // .then((res) => console.log(res));
    //     .then((result) => console.log(result));
    .then((response) => setUrl(response));
  return <div>{<img alt="" src={url}></img>}</div>;
}

export default Image;
