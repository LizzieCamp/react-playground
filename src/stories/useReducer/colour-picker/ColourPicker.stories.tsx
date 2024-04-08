import { ColourPicker } from "./ColourPicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ColourPicker> = {
  component: ColourPicker,
};

export default meta;
type Story = StoryObj<typeof ColourPicker>;

export const Primary: Story = {};
