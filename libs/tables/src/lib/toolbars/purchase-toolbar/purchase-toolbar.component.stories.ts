import type { Meta, StoryObj } from '@storybook/angular';
import { PurchaseToolbarComponent } from './purchase-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PurchaseToolbarComponent> = {
  component: PurchaseToolbarComponent,
  title: 'PurchaseToolbarComponent',
};
export default meta;
type Story = StoryObj<PurchaseToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
