import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateTaskComponent } from './update-task.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateTaskComponent> = {
  component: UpdateTaskComponent,
  title: 'UpdateTaskComponent',
};
export default meta;
type Story = StoryObj<UpdateTaskComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
