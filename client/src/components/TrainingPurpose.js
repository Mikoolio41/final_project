import React from "react";
import "../components/styles/TrainingPurpose.css";

const trainingTarget = [
  { label: "Build strength", target_id: 1 },
  { label: "Lose fat", target_id: 2 },
  { label: "Tone", target_id: 3 },
  { label: "Just be healthy!", target_id: 4 },
];

function TrainingPurpose(props) {
  return (
    <div className="targetContainer">
      {trainingTarget.map((item, index) => {
        return (
          <div key={index} className="radio">
            <input
              onChange={props.handleChange}
              type="radio"
              id={`radio${index}`}
              name="target"
              value={item.target_id}
            />
            <label htmlFor={`radio${index}`}>{item.label}</label>
          </div>
        );
      })}
    </div>
  );
}

export default TrainingPurpose;
