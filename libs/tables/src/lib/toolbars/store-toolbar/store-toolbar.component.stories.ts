import type { Meta, StoryObj } from '@storybook/angular';
import { StoreToolbarComponent } from './store-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StoreToolbarComponent> = {
  component: StoreToolbarComponent,
  title: 'StoreToolbarComponent',
};
export default meta;
type Story = StoryObj<StoreToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
