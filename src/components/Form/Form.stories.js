import React from "react";
import { storiesOf } from "@storybook/react";
import Counter from './Counter';

import Form from "./Form";

storiesOf("Form", module)
  .add("Email-small", () => <Form type="text" small />)
  .add("Email-regular", () => <Form type="text" regular />)
  .add("Email-large", () => <Form type="text" large />)
  .add("Dropdown-small", () => <Form type="dropdown" small />)
  .add("Dropdown-regular", () => <Form type="dropdown" regular />)
  .add("Dropdown-large", () => <Form type="dropdown" large />)
  .add("Counter", () => <Counter type="counter" regular/>)
