import React from "react";
import "./TrainingPurpose.css";

function TrainingPurpose(props) {
  return (
    <div>
      <div className="select animated zoomIn purposeContainer">
        <input type="radio" name="option" />
        <i className="toggle icon icon-arrow-down"></i>
        <i className="toggle icon icon-arrow-up"></i>
        <span className="placeholderTr">What is your training purpose --</span>
        <label className="option">
          <input
            onChange={props.handleChange}
            type="radio"
            name="option"
            value="1"
          />
          <span className="title animated fadeIn">Build Strength</span>
        </label>
        <label className="option">
          <input
            onChange={props.handleChange}
            type="radio"
            name="option"
            value="2"
          />
          <span className="title animated fadeIn">Lose Fat</span>
        </label>
        <label className="option">
          <input
            onChange={props.handleChange}
            type="radio"
            name="option"
            value="3"
          />
          <span className="title animated fadeIn">Toning</span>
        </label>
        <label className="option">
          <input
            onChange={props.handleChange}
            type="radio"
            name="option"
            value="4"
          />
          <span className="title animated fadeIn">Just be healthy!</span>
        </label>
      </div>
    </div>
  );
}

export default TrainingPurpose;
