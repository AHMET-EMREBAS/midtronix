import type { Meta, StoryObj } from '@storybook/angular';
import { HomeManufacturerComponent } from './home-manufacturer.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeManufacturerComponent> = {
  component: HomeManufacturerComponent,
  title: 'HomeManufacturerComponent',
};
export default meta;
type Story = StoryObj<HomeManufacturerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-manufacturer works!/gi)).toBeTruthy();
  },
};
