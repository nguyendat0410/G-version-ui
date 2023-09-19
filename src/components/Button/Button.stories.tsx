/**
 * @description   ¯\(ツ)/¯
 * @since         Tuesday, 9 19th 2023, 10:22:14 am
 * @author        Nguyễn Đạt <nguyendinhdat@getflycrm.com>
 * @copyright     Copyright (c) 2023, GETFLY VN TECH.,JSC
 * -----
 * Change Log: <press Ctrl + alt + c write changelog>
 */

import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Getfly/Button",
  component: Button,
  argTypes: {
    onClick: { action: true },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    bgColor: "primary",
  },
};

export const PrimaryDisable: Story = {
  name: "Primary disable ",
  args: {
    label: "Primary disable",
    bgColor: "primary",
    disable: true,
  },
};

export const Ghost: Story = {
  args: {
    label: "Ghost",
    bgColor: "ghost",
  },
};

export const GhostDisable: Story = {
  name: "Ghost disable ",
  args: {
    label: "Ghost disable",
    bgColor: "ghost",
    disable: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    bgColor: "secondary",
  },
};

export const SecondaryDisable: Story = {
  name: "Secondary disable ",
  args: {
    label: "Secondary disable",
    bgColor: "secondary",
    disable: true,
  },
};
