import React from "react";
import "./TrainingPurpose.css";

function TrainingPurpose() {
  return (
    <div>
      <div className="select animated zoomIn">
        <input type="radio" name="option" />
        <i className="toggle icon icon-arrow-down"></i>
        <i className="toggle icon icon-arrow-up"></i>
        <span className="placeholder">What is your training purpose --</span>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title animated fadeIn">Build Strength</span>
        </label>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title animated fadeIn">Lose Fat</span>
        </label>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title animated fadeIn">Toning</span>
        </label>
        <label className="option">
          <input type="radio" name="option" />
          <span className="title animated fadeIn">Just be healthy!</span>
        </label>
      </div>
    </div>
  );
}

export default TrainingPurpose;
