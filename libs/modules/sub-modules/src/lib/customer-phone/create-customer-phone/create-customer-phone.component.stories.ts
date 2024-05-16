import type { Meta, StoryObj } from '@storybook/angular';
import { CreateCustomerPhoneComponent } from './create-customer-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateCustomerPhoneComponent> = {
  component: CreateCustomerPhoneComponent,
  title: 'CreateCustomerPhoneComponent',
};
export default meta;
type Story = StoryObj<CreateCustomerPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
