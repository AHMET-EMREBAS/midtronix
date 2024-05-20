import type { Meta, StoryObj } from '@storybook/angular';
import { CheckoutButtonComponent } from './checkout-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CheckoutButtonComponent> = {
  component: CheckoutButtonComponent,
  title: 'CheckoutButtonComponent',
};
export default meta;
type Story = StoryObj<CheckoutButtonComponent>;

export const Primary: Story = {
  args: {
    subtotal: 'Subtotal Value',
    total: 'Total Value',
    label: 'Checkout',
  },
};

export const Heading: Story = {
  args: {
    subtotal: 'Subtotal Value',
    total: 'Total Value',
    label: 'Checkout',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/checkout-button works!/gi)).toBeTruthy();
  },
};
