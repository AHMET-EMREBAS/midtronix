import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateStoreComponent } from './update-store.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateStoreComponent> = {
  component: UpdateStoreComponent,
  title: 'UpdateStoreComponent',
};
export default meta;
type Story = StoryObj<UpdateStoreComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
