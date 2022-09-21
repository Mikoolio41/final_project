import React from "react";
import styles from "../components/styles/Exercise.module.css";

function Exercise(props) {
  return (
    <div>
      <div className={styles.exContainer}>
        <p>Target: {props.target}</p>
        <img alt="" src={props.url}></img>
        <p>Exercise Name: {props.name}</p>
        <p>Bodypart: {props.bodypart}</p>
        <p>Equipment: {props.equipment}</p>
        <p>Sets: {props.sets}</p>
        <p>Reps: {props.reps}</p>
        <p>Rest: {props.rest}</p>
      </div>
    </div>
  );
}

export default Exercise;
