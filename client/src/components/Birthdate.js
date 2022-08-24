import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function Birthdate() {
  const [date, setDate] = useState(new Date());
  const handleChange = (date) => setDate(date);

  return <DatePicker selected={date} onChange={handleChange} />;
}
