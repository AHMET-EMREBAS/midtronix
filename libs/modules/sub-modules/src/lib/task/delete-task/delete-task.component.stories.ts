import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteTaskComponent } from './delete-task.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteTaskComponent> = {
  component: DeleteTaskComponent,
  title: 'DeleteTaskComponent',
};
export default meta;
type Story = StoryObj<DeleteTaskComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
