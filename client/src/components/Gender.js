import React from "react";

function Gender() {
  return (
    <div>
      <input type="radio" value="Male" name="gender" /> Male
      <input type="radio" value="Female" name="gender" /> Female
      <input type="radio" value="Other" name="gender" /> Other
    </div>
  );
}

export default Gender;
