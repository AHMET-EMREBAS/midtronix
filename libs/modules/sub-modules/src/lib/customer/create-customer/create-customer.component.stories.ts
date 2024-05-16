import type { Meta, StoryObj } from '@storybook/angular';
import { CreateCustomerComponent } from './create-customer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateCustomerComponent> = {
  component: CreateCustomerComponent,
  title: 'CreateCustomerComponent',
};
export default meta;
type Story = StoryObj<CreateCustomerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
