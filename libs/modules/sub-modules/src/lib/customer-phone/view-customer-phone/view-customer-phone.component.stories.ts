import type { Meta, StoryObj } from '@storybook/angular';
import { ViewCustomerPhoneComponent } from './view-customer-phone.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewCustomerPhoneComponent> = {
  component: ViewCustomerPhoneComponent,
  title: 'ViewCustomerPhoneComponent',
};
export default meta;
type Story = StoryObj<ViewCustomerPhoneComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
