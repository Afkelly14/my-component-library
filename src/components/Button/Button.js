import React from "react";
import "./Button.css";

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
  let classList = [];

  let types = ["primary", "danger", "warning", "success", "default"];
  //types[0] = props['primary']
  //classlist.push('button-primary')
  if (types.includes(props.type)) {
    classList.push(`button-${props.type}`);
  }

  if (props.large) {
    classList.push(`button-large`);
  }

  if (props.outline) {
    classList.push(`button-outline-${props.type}`);
  }

  if (props.light) {
    classList.push(`button-light-${props.type}`);
  }

  return (
    //className={'button-primary'}
    <button className={classList.join(" ")} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
