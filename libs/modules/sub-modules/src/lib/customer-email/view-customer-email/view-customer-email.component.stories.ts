import type { Meta, StoryObj } from '@storybook/angular';
import { ViewCustomerEmailComponent } from './view-customer-emails.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewCustomerEmailComponent> = {
  component: ViewCustomerEmailComponent,
  title: 'ViewCustomerEmailComponent',
};
export default meta;
type Story = StoryObj<ViewCustomerEmailComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
