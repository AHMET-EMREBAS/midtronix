import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteStoreComponent } from './delete-store.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteStoreComponent> = {
  component: DeleteStoreComponent,
  title: 'DeleteStoreComponent',
};
export default meta;
type Story = StoryObj<DeleteStoreComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
