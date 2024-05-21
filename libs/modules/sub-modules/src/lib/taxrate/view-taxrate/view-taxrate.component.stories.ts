import type { Meta, StoryObj } from '@storybook/angular';
import { ViewTaxrateComponent } from './view-taxrate.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewTaxrateComponent> = {
  component: ViewTaxrateComponent,
  title: 'ViewTaxrateComponent',
};
export default meta;
type Story = StoryObj<ViewTaxrateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
