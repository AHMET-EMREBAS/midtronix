import type { Meta, StoryObj } from '@storybook/angular';
import { HomeUserPhoneComponent } from './home-user-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeUserPhoneComponent> = {
  component: HomeUserPhoneComponent,
  title: 'HomeUserPhoneComponent',
};
export default meta;
type Story = StoryObj<HomeUserPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-user-phone works!/gi)).toBeTruthy();
  },
};
