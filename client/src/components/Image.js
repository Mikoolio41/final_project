import React from "react";
// import { useState } from "react";

function Image(props) {
  // const [url, setUrl] = useState("");
  // fetch("/picture")
  // .then((response) => response.json())
  // .then((res) => console.log(res));
  //     .then((result) => console.log(result));
  // .then((response) => setUrl(response));
  return <div>{<img alt="" src={props.url}></img>}</div>;
}

export default Image;
