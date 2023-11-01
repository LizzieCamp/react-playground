import { Counter } from "./Counter";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Counter> = {
  component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

// export default {
//   title: "Example/useState/Counter",
//   component: Counter,
//   tags: ["autodocs"],
// };

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
