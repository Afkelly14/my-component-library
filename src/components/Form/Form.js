import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = [];

  let types = ["Email", "Small"];

  if (types.includes(props.type)) {
    classList.push(`form`);
  }

  if (props.small) {
    classList.push(`email-${props.type}`);
  }

  return (
    <form>
      <label>Email</label>
      <br />
      <input label="text" placeholder="Email" />
    </form>
  );
};

export default Form;
