import type { Meta, StoryObj } from '@storybook/angular';
import { HomeTaskComponent } from './home-task.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeTaskComponent> = {
  component: HomeTaskComponent,
  title: 'HomeTaskComponent',
};
export default meta;
type Story = StoryObj<HomeTaskComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-task works!/gi)).toBeTruthy();
  },
};
