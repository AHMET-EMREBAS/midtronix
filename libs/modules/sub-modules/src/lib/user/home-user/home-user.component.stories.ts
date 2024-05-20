import type { Meta, StoryObj } from '@storybook/angular';
import { HomeUserComponent } from './home-user.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeUserComponent> = {
  component: HomeUserComponent,
  title: 'HomeUserComponent',
};
export default meta;
type Story = StoryObj<HomeUserComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-user works!/gi)).toBeTruthy();
  },
};
