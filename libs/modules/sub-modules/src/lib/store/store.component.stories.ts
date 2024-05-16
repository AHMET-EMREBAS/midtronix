import type { Meta, StoryObj } from '@storybook/angular';
import { StoreComponent } from './store.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StoreComponent> = {
  component: StoreComponent,
  title: 'StoreComponent',
};
export default meta;
type Story = StoryObj<StoreComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
