import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerAccountToolbarComponent } from './customer-account-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerAccountToolbarComponent> = {
  component: CustomerAccountToolbarComponent,
  title: 'CustomerAccountToolbarComponent',
};
export default meta;
type Story = StoryObj<CustomerAccountToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
