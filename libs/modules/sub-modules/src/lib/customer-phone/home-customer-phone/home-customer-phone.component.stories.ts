import type { Meta, StoryObj } from '@storybook/angular';
import { HomeCustomerPhoneComponent } from './home-customer-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeCustomerPhoneComponent> = {
  component: HomeCustomerPhoneComponent,
  title: 'HomeCustomerPhoneComponent',
};
export default meta;
type Story = StoryObj<HomeCustomerPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-customer-phone works!/gi)).toBeTruthy();
  },
};
