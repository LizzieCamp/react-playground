import { Quote } from "./Quote";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Quote> = {
  component: Quote,
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Primary: Story = {};
