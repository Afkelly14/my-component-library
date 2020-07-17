import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

function onClick() {
  alert("you have clicked a button");
}

storiesOf("Button", module)
  .add("Primary", () => (
    <Button type="primary"  label="Primary" />
  ))
  .add("Danger", () => <Button type="danger" label="Danger" />)
  .add("Success", () => <Button type="success" label="Success" />)
  .add("Warning", () => <Button type="warning" label="Warning" />)
  .add("Default", () => <Button type="default" label="Default" />)

  .add("Primary Outline", () => <Button type="primary" outline label="Primary" />)
  .add("Danger Outline", () => <Button type="danger" outline label="Danger" />)
  .add("Success Outline", () => <Button type="success" outline label="Success" />)
  .add("Warning Outline", () => <Button type="warning" outline label="Warning" />)
  .add("Default Outline", () => <Button type="default" outline label="Default" />)

  .add("Primary Light", () => <Button type="primary" light label="Primary" />)
  .add("Danger Light", () => <Button type="danger" light label="Danger" />)
  .add("Success Light", () => <Button type="success" light label="Success" />)
  .add("Warning Light", () => <Button type="warning" light label="Warning" />)
  .add("Default Light", () => <Button type="default" light label="Default" />)
 

  .add("Large Primary", () => <Button type="primary" large label="Large-Primary" />)
  
