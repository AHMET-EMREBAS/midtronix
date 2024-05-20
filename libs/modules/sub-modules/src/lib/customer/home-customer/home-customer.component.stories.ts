import type { Meta, StoryObj } from '@storybook/angular';
import { HomeCustomerComponent } from './home-customer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeCustomerComponent> = {
  component: HomeCustomerComponent,
  title: 'HomeCustomerComponent',
};
export default meta;
type Story = StoryObj<HomeCustomerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-customer works!/gi)).toBeTruthy();
  },
};
