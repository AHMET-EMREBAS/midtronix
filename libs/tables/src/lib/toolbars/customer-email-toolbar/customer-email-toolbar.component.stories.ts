import type { Meta, StoryObj } from '@storybook/angular';
import { CustomerEmailToolbarComponent } from './customer-email-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CustomerEmailToolbarComponent> = {
  component: CustomerEmailToolbarComponent,
  title: 'CustomerEmailToolbarComponent',
};
export default meta;
type Story = StoryObj<CustomerEmailToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
