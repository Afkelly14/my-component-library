import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from "./Counter";

import Form from "./Form";
import Select from "./Select";

storiesOf("Form", module)
  .add("Email-small", () => <Form email type="text" small />)
  .add("Email", () => <Form email type="text" />)
  .add("Email-large", () => <Form email type="text" large />)
  .add("Dropdown-small", () => <Form dropdown type="dropdown" small />)
  .add("Dropdown-small-dark", () => <Form dropdown type="dropdown" small dark />)
  .add("Dropdown", () => <Form dropdown type="dropdown" />)
  .add("Dropdown-dark", () => <Form dropdown type="dropdown" dark />)
  .add("Dropdown-large", () => <Form dropdown type="dropdown" large />)
  .add("Dropdown-large-dark", () => <Form dropdown type="dropdown" large dark />)
  .add("Counter", () => <Counter type="counter" />);
