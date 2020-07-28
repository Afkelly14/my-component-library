import React from "react";
import "./Form.css";

const Select = (props) => {
  let classList = "";
  let types = ["Select"];
  if (types.includes(props.type)) {
    classList += `select-${props.type}`;
  }
  return (
    <select className={classList}>
      <option>Select</option>
    </select>
  );
};

export default Select;
