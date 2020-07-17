import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

function onClick() {
  alert("you have clicked a button");
}

storiesOf("Button", module)
  .add("Primary", () => (
    <Button type="primary" whenClicked={onClick} label="Primary" />
  ))
  .add("Danger", () => <Button type="danger" label="Danger" />)
  .add("Success", () => <Button type="success" label="Success" />)
  .add("Warning", () => <Button type="warning" label="Warning" />)
  .add("Default", () => <Button type="default" label="Default" />)

  .add("Primary", () => <Button type="primary" outline label="Primary" />)
  .add("Danger", () => <Button type="danger" outline label="Danger" />)
  .add("Success", () => <Button type="success" outline label="Success" />)
  .add("Warning", () => <Button type="warning" outline label="Warning" />)
  .add("Default", () => <Button type="default" outline label="Default" />)

  .add("Large Primary", () => <Button type="primary" large label="Large-Primary" />)
  .add("Outline Primary", () => <Button type="primary" outline label="Outline-Primary" />)
