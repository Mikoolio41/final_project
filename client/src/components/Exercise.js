import React from "react";

function Exercise(props) {
  return (
    <div>
      <p>Target: {props.target}</p>
      <p>Exercise Name: {props.name}</p>
      <p>Bodypart: {props.bodypart}</p>
      <p>Equipment: {props.equipment}</p>
      <p>Sets: {props.sets}</p>
      <p>Reps: {props.reps}</p>
      <p>Rest: {props.rest}</p>
      <p>{props.gifurl}</p>
    </div>
  );
}

export default Exercise;
