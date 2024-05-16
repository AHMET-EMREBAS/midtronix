import type { Meta, StoryObj } from '@storybook/angular';
import { UpdatePriceComponent } from './update-price.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdatePriceComponent> = {
  component: UpdatePriceComponent,
  title: 'UpdatePriceComponent',
};
export default meta;
type Story = StoryObj<UpdatePriceComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
