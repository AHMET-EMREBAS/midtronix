import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteQuantityComponent } from './delete-quantity.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteQuantityComponent> = {
  component: DeleteQuantityComponent,
  title: 'DeleteQuantityComponent',
};
export default meta;
type Story = StoryObj<DeleteQuantityComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
