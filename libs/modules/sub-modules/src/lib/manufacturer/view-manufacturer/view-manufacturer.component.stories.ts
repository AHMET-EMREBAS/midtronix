import type { Meta, StoryObj } from '@storybook/angular';
import { ViewManufacturerComponent } from './view-manufacturer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewManufacturerComponent> = {
  component: ViewManufacturerComponent,
  title: 'ViewManufacturerComponent',
};
export default meta;
type Story = StoryObj<ViewManufacturerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
