import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button>{args.children}</Button>,
  args: {
    children: "Default",
    variant: "default",
  },
};

export const Primary: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Success: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Success",
    variant: "success",
  },
};
export const Danger: Story = {
  render: (args) => <Button {...args}>{args.children}</Button>,
  args: {
    children: "Danger",
    variant: "danger",
  },
};
