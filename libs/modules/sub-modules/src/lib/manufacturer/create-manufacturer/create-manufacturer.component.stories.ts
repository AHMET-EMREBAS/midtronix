import type { Meta, StoryObj } from '@storybook/angular';
import { CreateManufacturerComponent } from './create-manufacturer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateManufacturerComponent> = {
  component: CreateManufacturerComponent,
  title: 'CreateManufacturerComponent',
};
export default meta;
type Story = StoryObj<CreateManufacturerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
