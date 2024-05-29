import type { Meta, StoryObj } from '@storybook/angular';
import { UpdatePurchaseComponent } from './update-purchase.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdatePurchaseComponent> = {
  component: UpdatePurchaseComponent,
  title: 'UpdatePurchaseComponent',
};
export default meta;
type Story = StoryObj<UpdatePurchaseComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
