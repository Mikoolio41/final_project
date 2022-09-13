import React from "react";
import "./TrainingPurpose.css";

const trainingTarget = [
  { name: "build_strength", label: "Build strength", target_id: 1 },
  { name: "lose_fat", label: "Lose fat", target_id: 2 },
  { name: "tone", label: "Tone", target_id: 3 },
  { name: "healthy", label: "Just be healthy!", target_id: 4 },
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
              name={item.name}
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
