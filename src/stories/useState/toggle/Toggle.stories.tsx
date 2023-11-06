import { Toggle } from "./Toggle";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {};
