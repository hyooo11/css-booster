import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Button from "./Button";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "버튼",
    variant: "primary",
  },
};
