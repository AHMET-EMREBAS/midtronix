import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerToolbarComponent } from './customer-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerToolbarComponent> = {
  component: CustomerToolbarComponent,
  title: 'CustomerToolbarComponent',
};
export default meta;
type Story = StoryObj<CustomerToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
