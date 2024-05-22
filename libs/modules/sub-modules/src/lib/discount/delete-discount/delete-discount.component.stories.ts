import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteDiscountComponent } from './delete-discount.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteDiscountComponent> = {
  component: DeleteDiscountComponent,
  title: 'DeleteDiscountComponent',
};
export default meta;
type Story = StoryObj<DeleteDiscountComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
