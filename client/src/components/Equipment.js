import React from "react";
import "./Equipment.css";

const equip = [
  { name: "assisted", label: "Assisted", exid: "assisted" },
  { name: "band", label: "Band", exid: "band" },
  { name: "barbell", label: "Barbell", exid: "barbell" },
  { name: "bosu_ball", label: "Bosu Ball", exid: "bosu ball" },
  { name: "cable", label: "Cable", exid: "cable" },
  { name: "dumbbell", label: "Dumbbell", exid: "dumbbell" },
  {
    name: "elliptical_machine",
    label: "Elliptical Machine",
    exid: "elliptical machine",
  },
  { name: "ez_barbell", label: "Ez Barbell", exid: "ez barbell" },
  { name: "hammer", label: "Hammer", exid: "hammer" },
  { name: "kettlebell", label: "Kettlebell", exid: "kettlebell" },
  {
    name: "leverage_machine",
    label: "Leverage Machine",
    exid: "leverage machine",
  },
  { name: "medicine_ball", label: "Medicine Ball", exid: "medicine ball" },
  {
    name: "olympic_barbell",
    label: "Olympic Barbell",
    exid: "olympic barbell",
  },
  {
    name: "resistance_band",
    label: "Resistance Band",
    exid: "resistance band",
  },
  { name: "roller", label: "Roller", exid: "roller" },
  { name: "rope", label: "Rope", exid: "rope" },
  { name: "skierg_machine", label: "Skierg Machine", exid: "skierg machine" },
  { name: "sled_machine", label: "Sled Machine", exid: "sled machine" },
  { name: "smith_machine", label: "Smith Machine", exid: "smith machine" },
  { name: "stability_ball", label: "Stability Ball", exid: "stability ball" },
  {
    name: "stationary_bike",
    label: "Stationary Bike",
    exid: "stationary bike",
  },
  {
    name: "stepmill_machine",
    label: "Stepmill Machine",
    exid: "stepmill machine",
  },
  { name: "tire", label: "Tire", exid: "tire" },
  { name: "trap_bar", label: "Trap Bar", exid: "trap bar" },
  {
    name: "upper_body_ergometer",
    label: "Upper Body Ergometer",
    exid: "upper body ergometer",
  },
  { name: "weighted", label: "Weighted", exid: "weighted" },
  { name: "wheel_roller", label: "Wheel Roller", exid: "wheel roller" },
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
              value={item.exid}
            />
            <label htmlFor={`checkbox-rect${index}`}>{item.label}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Equipment;
