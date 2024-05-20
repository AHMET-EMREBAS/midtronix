import type { Meta, StoryObj } from '@storybook/angular';
import { HomeMessageComponent } from './home-message.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeMessageComponent> = {
  component: HomeMessageComponent,
  title: 'HomeMessageComponent',
};
export default meta;
type Story = StoryObj<HomeMessageComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-message works!/gi)).toBeTruthy();
  },
};
