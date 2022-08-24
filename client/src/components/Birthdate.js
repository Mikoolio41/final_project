import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Birthdate() {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => setDate(date);

  return (
    <DatePicker className="calendar" selected={date} onChange={handleChange} />
  );
}
