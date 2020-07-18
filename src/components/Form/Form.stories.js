import React from "react";
import { storiesOf } from "@storybook/react";

import Form from "./Form";

storiesOf("Form", module)
  .add("Email", () => <Form type='email'/>)
  .add("Email-small", () => <Form type='email' small />)
  .add("Email-large", () => <Form type='email' large/>);
