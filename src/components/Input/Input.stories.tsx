/**
 * @description   ¯\(ツ)/¯
 * @since         Wednesday, 9 20th 2023, 10:57:27 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Getfly/Input",
  component: Input,
  // tags: ["autodocs"],
  argTypes: {
    onChange: { action: true },
    onKeyDown: { action: true },
    onKeyUp: { action: true },
    type: {
      control: "select",
      options: ["text", "number", "date"],
      description: "Đây là mô tả",
    },
  },
};
export default meta;

type StoryInput = StoryObj<typeof Input>;

export const Basic: StoryInput = (args) => <Input {...args} />;
Basic.args = {
  type: "text",
  placeholder: "Placeholder",
  value: "",
  withIcon: false,
  withLabel: false,
  textLabel: "label",
  hasRequired: false,
  error: false,
  disable: false,
};

export const DefaultInput: StoryInput = {
  name: "Default input",
  args: {
    type: "text",
    placeholder: "Placeholder",
  },
};

export const InputWithValue: StoryInput = {
  name: "Input with value",
  args: {
    type: "text",
    placeholder: "Placeholder",
    value: "Default value",
  },
};

export const InputWithIcon: StoryInput = {
  name: "Input with icon",
  args: {
    type: "text",
    placeholder: "Placeholder",
    withIcon: true,
  },
};

export const InputWithLabel: StoryInput = {
  name: "Input with label",
  args: {
    type: "text",
    placeholder: "Placeholder",
    withLabel: true,
    textLabel: "label name",
  },
};

export const InputWithLabelRequired: StoryInput = {
  name: "Input with required",
  args: {
    type: "text",
    placeholder: "Placeholder",
    withLabel: true,
    textLabel: "Required value",
    hasRequired: true,
  },
};

export const InputError: StoryInput = {
  name: "Input error",
  args: {
    type: "text",
    placeholder: "Placeholder error",
    error: true,
  },
};

export const InputDisable: StoryInput = {
  name: "Input disable",
  args: {
    type: "text",
    placeholder: "Placeholder disable",
    disable: true,
  },
};
