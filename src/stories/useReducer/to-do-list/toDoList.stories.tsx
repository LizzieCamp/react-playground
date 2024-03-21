import { toDoList } from "./toDoList";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof toDoList> = {
  component: toDoList,
};

export default meta;
type Story = StoryObj<typeof toDoList>;

export const Primary: Story = {};
