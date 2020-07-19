import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = [];

  let types = ["email", "dropdown"];

  if (types.includes(props.type)) {
    classList.push(`${props.type}`);
  }

  if (props.small) {
    classList.push(`${props.type}-small`);
  }

  if (props.regular) {
    classList.push(`${props.type}-regular`);
  }

  if (props.large) {
    classList.push(`${props.type}-large`);
  }

  if (props.dark) {
    classList.push(`${props.type}-dark`);
  }

  if (props.email) {
  return (
    <form>
      <label>Email</label>
      <br />
      <input label="text" className={classList.join(" ")} placeholder="Email" />
    </form>
  );
  }//end of if statement

  if (props.dropdown) {
      return (
      <select className={classList.join(" ")}>
      <option>Select</option>
    </select>
      )
  }
};

export default Form;
