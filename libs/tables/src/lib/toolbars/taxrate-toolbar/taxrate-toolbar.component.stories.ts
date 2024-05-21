import type { Meta, StoryObj } from '@storybook/angular';
import { TaxrateToolbarComponent } from './taxrate-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TaxrateToolbarComponent> = {
  component: TaxrateToolbarComponent,
  title: 'TaxrateToolbarComponent',
};
export default meta;
type Story = StoryObj<TaxrateToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
