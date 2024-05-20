import type { Meta, StoryObj } from '@storybook/angular';
import { HomeCustomerEmailComponent } from './home-customer-email.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeCustomerEmailComponent> = {
  component: HomeCustomerEmailComponent,
  title: 'HomeCustomerEmailComponent',
};
export default meta;
type Story = StoryObj<HomeCustomerEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-customer-email works!/gi)).toBeTruthy();
  },
};
