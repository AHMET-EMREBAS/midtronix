import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteManufacturerComponent } from './delete-manufacturer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteManufacturerComponent> = {
  component: DeleteManufacturerComponent,
  title: 'DeleteManufacturerComponent',
};
export default meta;
type Story = StoryObj<DeleteManufacturerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
