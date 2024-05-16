import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerPhoneComponent } from './customer-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerPhoneComponent> = {
  component: CustomerPhoneComponent,
  title: 'CustomerPhoneComponent',
};
export default meta;
type Story = StoryObj<CustomerPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
