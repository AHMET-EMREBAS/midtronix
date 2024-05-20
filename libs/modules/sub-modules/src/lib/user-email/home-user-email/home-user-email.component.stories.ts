import type { Meta, StoryObj } from '@storybook/angular';
import { HomeUserEmailComponent } from './home-user-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeUserEmailComponent> = {
  component: HomeUserEmailComponent,
  title: 'HomeUserEmailComponent',
};
export default meta;
type Story = StoryObj<HomeUserEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-user-email works!/gi)).toBeTruthy();
  },
};
