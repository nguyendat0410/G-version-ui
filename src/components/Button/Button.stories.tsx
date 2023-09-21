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
import { ButtonVariant, ButtonSize } from "../../themes";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Getfly/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: true },
    size: {
      control: "select",
      options: [ButtonSize.large, ButtonSize.medium, ButtonSize.small],
      description: "Tuỳ chọn kích thước",
    },
    variant: {
      control: "radio",
      options: [
        ButtonVariant.primary,
        ButtonVariant.ghost,
        ButtonVariant.secondary,
      ],
      description: "Chọn kích thước button",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = (args: any) => <Button {...args} />;
Basic.args = { label: "Default text", variant: "primary", size: "large", disable: false };

export const AllPrimary = () => (
  <>
    <div style={{ display: "flex", gap: 16, padding: 32 }}>
      <Button label="primary xs" size="small" variant="primary" />
      <Button label="primary s" size="medium" variant="primary" />
      <Button label="primary m" size="large" variant="primary" />
    </div>
    <div style={{ display: "flex", gap: 16, padding: 32 }}>
      <Button label="ghost xs" size="small" variant="ghost" />
      <Button label="ghost s" size="medium" variant="ghost" />
      <Button label="ghost m" size="large" variant="ghost" />
    </div>
    <div style={{ display: "flex", gap: 16, padding: 32 }}>
      <Button label="secondary xs" size="small" variant="secondary" />
      <Button label="secondary s" size="medium" variant="secondary" />
      <Button label="secondary m" size="large" variant="secondary" />
    </div>
  </>
);

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
    size: "medium",
  },
};

export const PrimaryDisable: Story = {
  name: "Primary disable ",
  args: {
    label: "Primary disable",
    variant: "primary",
    size: "large",
    disable: true,
  },
};

export const Ghost: Story = {
  args: {
    label: "Ghost",
    variant: 'ghost',
    size: "small",
  },
};

export const GhostDisable: Story = {
  name: "Ghost disable ",
  args: {
    label: "Ghost disable",
    variant: 'ghost',
    size: "large",
    disable: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: 'secondary',
    size: "medium",
  },
};

export const SecondaryDisable: Story = {
  name: "Secondary disable ",
  args: {
    label: "Secondary disable",
    variant: 'secondary',
    size: "large",
    disable: true,
  },
};
