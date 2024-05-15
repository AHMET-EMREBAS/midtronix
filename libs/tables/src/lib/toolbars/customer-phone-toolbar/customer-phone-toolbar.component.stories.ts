import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerPhoneToolbarComponent } from './customer-phone-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerPhoneToolbarComponent> = {
  component: CustomerPhoneToolbarComponent,
  title: 'CustomerPhoneToolbarComponent',
};
export default meta;
type Story = StoryObj<CustomerPhoneToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
