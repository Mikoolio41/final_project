import React from "react";

function Goal() {
  return (
    <div>
      <select>
        <option value="none">-- Please select -- </option>
        <option value="Strength">Building Strength</option>
        <option value="Hypertrophy">Hypertrophy</option>
        <option value="Toning">Muscle Tone</option>
        <option value="Lose Weight">Lose Weight</option>
      </select>
    </div>
  );
}

export default Goal;
