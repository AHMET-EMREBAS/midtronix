import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteCustomerPhoneComponent } from './delete-customer-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteCustomerPhoneComponent> = {
  component: DeleteCustomerPhoneComponent,
  title: 'DeleteCustomerPhoneComponent',
};
export default meta;
type Story = StoryObj<DeleteCustomerPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
