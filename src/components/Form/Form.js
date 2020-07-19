import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = [];

  let types = ["email", "small", "regular"];

  if (types.includes(props.type)) {
    classList.push(`form`);
  }

  if (props.small) {
    classList.push(`email-${props.type}`);
  }

  if (props.regular) {
    classList.push(`email-${props.type}`);
  }

  if (props.large) {
    classList.push(`email-${props.type}`);
  }

  return (
    <form>
      <label>Email</label>
      <br />
      <input label="text" className={classList.join(" ")} placeholder="Email" />
    </form>
  );
};

export default Form;
