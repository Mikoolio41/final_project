import React from "react";

function Exercise(props) {
  return (
    <div
      name={props.name}
      bodypart={props.bodypart}
      equipment={props.equipment}
      sets={props.sets}
      reps={props.reps}
      rest={props.rest}
      gifurl={props.gifurl}
    ></div>
  );
}

export default Exercise;
