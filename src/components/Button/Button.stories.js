import React from "react";
import { storiesOf } from "@storybook/react";

import Button from "./Button";

function onClick() {
  alert("you have clicked a button");
}

storiesOf("Button", module)
  .add("Primary", () => <Button type="primary" label="Do Something" />)
  .add("Danger", () => <Button type="danger" label="Do Something" />)
  .add("Success", () => <Button type="success" label="Do Something" />)
  .add("Warning", () => <Button type="warning" label="Do Something" />)
  .add("Default", () => <Button type="default" label="Do Something" />)

  .add("Primary Outline", () => (
    <Button type="primary" outline label="Do Something" />
  ))
  .add("Danger Outline", () => (
    <Button type="danger" outline label="Do Something" />
  ))
  .add("Success Outline", () => (
    <Button type="success" outline label="Do Something" />
  ))
  .add("Warning Outline", () => (
    <Button type="warning" outline label="Do Something" />
  ))
  .add("Default Outline", () => (
    <Button type="default" outline label="Do Something" />
  ))

  .add("Primary Light", () => (
    <Button type="primary" light label="Do Something" />
  ))
  .add("Danger Light", () => (
    <Button type="danger" light label="Do Something" />
  ))
  .add("Success Light", () => (
    <Button type="success" light label="Do Something" />
  ))
  .add("Warning Light", () => (
    <Button type="warning" light label="Do Something" />
  ))
  .add("Default Light", () => (
    <Button type="default" light label="Do Something" />
  ))

  .add("Large Primary", () => (
    <Button type="primary" large label="Do Something" />
  ))
  .add("Large Danger", () => (
    <Button type="danger" large label="Do Something" />
  ))
  .add("Large success", () => (
    <Button type="success" large label="Do Something" />
  ))
  .add("Large Warning", () => (
    <Button type="warning" large label="Do Something" />
  ))
  .add("Large Default", () => (
    <Button type="default" large label="Do Something" />
  ))

  .add("Large Light Primary", () => (
    <Button type="primary" large light label="Do Something" />
  ))
  .add("Large Light Danger", () => (
    <Button type="danger" large light label="Do Something" />
  ))
  .add("Large Light Success", () => (
    <Button type="success" large light label="Do Something" />
  ))
  .add("Large Light Warning", () => (
    <Button type="warning" large light label="Do Something" />
  ))
  .add("Large Light Default", () => (
    <Button type="default" large light label="Do Something" />
  ))

  .add("Large Outline Primary", () => (
    <Button type="primary" large outline label="Do Something" />
  ))
  .add("Large Outline Danger", () => (
    <Button type="danger" large outline label="Do Something" />
  ))
  .add("Large Outline Success", () => (
    <Button type="success" large outline label="Do Something" />
  ))
  .add("Large Outline Warning", () => (
    <Button type="warning" large outline label="Do Something" />
  ))
  .add("Large Outline Default", () => (
    <Button type="default" large outline label="Do Something" />
  ));
