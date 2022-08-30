import React from "react";
import "./Equipment.css";

const equip = [
  { name: "assisted", label: "Assisted" },
  { name: "band", label: "Band" },
  { name: "barbell", label: "Barbell" },
  { name: "body_weight", label: "Body Weight" },
  { name: "bosu_ball", label: "Bosu Ball" },
  { name: "cable", label: "Cable" },
  { name: "dumbbell", label: "Dumbbell" },
  { name: "elliptical machine", label: "Elliptical Machine" },
  { name: "ez_barbell", label: "Ez Barbell" },
  { name: "hammer", label: "Hammer" },
  { name: "kettlebell", label: "Kettlebell" },
  { name: "leverage_machine", label: "Leverage Machine" },
  { name: "medicine_ball", label: "Medicine Ball" },
  { name: "olympic_barbell", label: "Olympic Barbell" },
  { name: "resistance_band", label: "Resistance Band" },
  { name: "roller", label: "Roller" },
  { name: "rope", label: "Rope" },
  { name: "skierg_machine", label: "Skierg Machine" },
  { name: "sled_machine", label: "Sled Machine" },
  { name: "smith_machine", label: "Smith Machine" },
  { name: "stability_ball", label: "Stability Ball" },
  { name: "stationary_bike", label: "Stationary Bike" },
  { name: "stepmill_machine", label: "Stepmill Machine" },
  { name: "tire", label: "Tire" },
  { name: "trap_bar", label: "Trap Bar" },
  { name: "upper_body_ergometer", label: "Upper Body Ergometer" },
  { name: "weighted", label: "Weighted" },
  { name: "wheel_roller", label: "Wheel Roller" },
];

function Equipment(props) {
  return (
    <div className="checkboxContainer">
      {equip.map((item, index) => {
        return (
          <div key={index} className="checkbox-rect">
            <input
              onChange={props.handleChange}
              type="checkbox"
              id={`checkbox-rect${index}`}
              name={item.name}
            />
            <label htmlFor={`checkbox-rect${index}`}>{item.label}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Equipment;
