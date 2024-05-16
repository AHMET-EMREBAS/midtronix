import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateCustomerPhoneComponent } from './update-customer-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateCustomerPhoneComponent> = {
  component: UpdateCustomerPhoneComponent,
  title: 'UpdateCustomerPhoneComponent',
};
export default meta;
type Story = StoryObj<UpdateCustomerPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
