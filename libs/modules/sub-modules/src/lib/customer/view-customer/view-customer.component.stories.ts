import type { Meta, StoryObj } from '@storybook/angular';
import { ViewCustomerComponent } from './view-customer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewCustomerComponent> = {
  component: ViewCustomerComponent,
  title: 'ViewCustomerComponent',
};
export default meta;
type Story = StoryObj<ViewCustomerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
