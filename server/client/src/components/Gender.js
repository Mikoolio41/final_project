import React from "react";
import styles from "../containers/styles/Signup.module.css";

function Gender(props) {
  return (
    <div className={styles.labelGender}>
      <label htmlFor={styles.labelGender}></label>
      <input
        type="radio"
        value="Male"
        name={styles.labelGender}
        onChange={props.changeGender}
      />{" "}
      Male
      <label htmlFor={styles.labelGender}></label>
      <input
        className={styles.femalebtn}
        type="radio"
        value="Female"
        name={styles.labelGender}
        style={{ color: "red" }}
        onChange={props.changeGender}
      />{" "}
      Female
      <label htmlFor={styles.labelGender}></label>
      <input
        className={styles.otherbtn}
        type="radio"
        value="Other"
        name={styles.labelGender}
        style={{ color: "white" }}
        onChange={props.changeGender}
      />{" "}
      Other
    </div>
  );
}

export default Gender;
