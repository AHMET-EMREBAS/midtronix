import type { Meta, StoryObj } from '@storybook/angular';
import { ViewQuantityComponent } from './view-quantity.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewQuantityComponent> = {
  component: ViewQuantityComponent,
  title: 'ViewQuantityComponent',
};
export default meta;
type Story = StoryObj<ViewQuantityComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
