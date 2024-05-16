import type { Meta, StoryObj } from '@storybook/angular';
import { ViewTaskComponent } from './view-task.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewTaskComponent> = {
  component: ViewTaskComponent,
  title: 'ViewTaskComponent',
};
export default meta;
type Story = StoryObj<ViewTaskComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
