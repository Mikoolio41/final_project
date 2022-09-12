import React from "react";
// import { useState } from "react";

function Image(props) {
  return (
    <div>
      {<img alt="" src={props.url} style={{ width: 150, height: 150 }}></img>}
    </div>
  );
}

export default Image;
