import type { Meta, StoryObj } from '@storybook/angular';
import { HomeSprintComponent } from './home-sprint.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeSprintComponent> = {
  component: HomeSprintComponent,
  title: 'HomeSprintComponent',
};
export default meta;
type Story = StoryObj<HomeSprintComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-sprint works!/gi)).toBeTruthy();
  },
};
