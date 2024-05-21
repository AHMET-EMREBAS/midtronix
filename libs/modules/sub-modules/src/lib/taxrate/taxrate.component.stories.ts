import type { Meta, StoryObj } from '@storybook/angular';
import { TaxrateComponent } from './taxrate.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TaxrateComponent> = {
  component: TaxrateComponent,
  title: 'TaxrateComponent',
};
export default meta;
type Story = StoryObj<TaxrateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
