import type { Meta, StoryObj } from '@storybook/angular';
import { CreateQuantityComponent } from './create-quantity.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateQuantityComponent> = {
  component: CreateQuantityComponent,
  title: 'CreateQuantityComponent',
};
export default meta;
type Story = StoryObj<CreateQuantityComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
