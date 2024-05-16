import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerComponent } from './customer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerComponent> = {
  component: CustomerComponent,
  title: 'CustomerComponent',
};
export default meta;
type Story = StoryObj<CustomerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
