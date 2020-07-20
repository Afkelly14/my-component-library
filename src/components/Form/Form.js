import React from "react";
import "./Form.css";

const Form = (props) => {
  let classList = [];
  let largeClass = [];

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

  if (props.size) {
    largeClass.push(`submit-${props.size}`);
  }

  if (props.email) {
    return (
      <form>
        <label>Email</label>
        <br />
        <input
          label="text"
          className={classList.join(" ")}
          placeholder="Email"
        />
      </form>
    );
  } //end of if statement

  if (props.dropdown) {
    return (
      <select className={classList.join(" ")}>
        <option>Select</option>
      </select>
    );
  }

  if (props.voucher) {
    return (
      <form>
        <br />
        <input
          type={props.text}
          className={classList.join(" ")}
          value={props.value}
        />
        <input type="submit" className="Voucher" value={props.value} />
      </form>
    );
  }
};

export default Form;
