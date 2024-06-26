import type { Meta, StoryObj } from '@storybook/angular';
import { UpdateManufacturerComponent } from './update-manufacturer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UpdateManufacturerComponent> = {
  component: UpdateManufacturerComponent,
  title: 'UpdateManufacturerComponent',
};
export default meta;
type Story = StoryObj<UpdateManufacturerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
