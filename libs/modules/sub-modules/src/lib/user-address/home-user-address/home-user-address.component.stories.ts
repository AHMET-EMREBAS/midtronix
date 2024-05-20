import type { Meta, StoryObj } from '@storybook/angular';
import { HomeUserAddressComponent } from './home-user-address.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeUserAddressComponent> = {
  component: HomeUserAddressComponent,
  title: 'HomeUserAddressComponent',
};
export default meta;
type Story = StoryObj<HomeUserAddressComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-user-address works!/gi)).toBeTruthy();
  },
};
