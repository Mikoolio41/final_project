import React from "react";
import styles from "../components/styles/Exercise.module.css";

function Exercise(props) {
  return (
    <div>
      <div className={styles.exContainer}>
        <img alt="" src={props.url}></img>
        <span>Target: {props.target}</span>
        <span>Exercise Name: {props.name}</span>
        <span>Bodypart: {props.bodypart}</span>
        <span>Equipment: {props.equipment}</span>
        <span>
          Sets: {props.sets}, Reps: {props.reps}, Rest: {props.rest}
        </span>
      </div>
    </div>
  );
}

export default Exercise;
