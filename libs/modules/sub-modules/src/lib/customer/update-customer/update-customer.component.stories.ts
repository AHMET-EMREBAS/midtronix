import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateCustomerComponent } from './update-customer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateCustomerComponent> = {
  component: UpdateCustomerComponent,
  title: 'UpdateCustomerComponent',
};
export default meta;
type Story = StoryObj<UpdateCustomerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
