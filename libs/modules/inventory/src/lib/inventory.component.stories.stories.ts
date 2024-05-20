import type { Meta, StoryObj } from '@storybook/angular';
import { RouterComponent } from './inventory.component.stories';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RouterComponent> = {
  component: RouterComponent,
  title: 'RouterComponent',
};
export default meta;
type Story = StoryObj<RouterComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/inventory.stories works!/gi)).toBeTruthy();
  },
};
