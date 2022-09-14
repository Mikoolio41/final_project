import React from "react";
import styles from "./Exercise.module.css";

function Exercise(props) {
  return (
    <div>
      <div className={styles.exContainer}>
        <p>Target: {props.target}</p>
        <p>Exercise Name: {props.name}</p>
        <p>Bodypart: {props.bodypart}</p>
        <p>Equipment: {props.equipment}</p>
        <p>Sets: {props.sets}</p>
        <p>Reps: {props.reps}</p>
        <p>Rest: {props.rest}</p>
        {/* <p>{props.gifurl}</p> */}
        <img alt="" src={props.url} style={{ width: 150, height: 150 }}></img>
      </div>
    </div>
  );
}

export default Exercise;
