import type { Meta, StoryObj } from '@storybook/angular';
import { ManufacturerComponent } from './manufacturer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ManufacturerComponent> = {
  component: ManufacturerComponent,
  title: 'ManufacturerComponent',
};
export default meta;
type Story = StoryObj<ManufacturerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
