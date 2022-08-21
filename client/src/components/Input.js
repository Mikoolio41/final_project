import React from "react";

function Input(props) {
  return (
    <div>
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.inputChange}
      />
    </div>
  );
}

export default Input;
