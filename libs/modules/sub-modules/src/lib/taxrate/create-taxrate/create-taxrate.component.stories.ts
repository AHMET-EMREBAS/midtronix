import type { Meta, StoryObj } from '@storybook/angular';
import { CreateTaxrateComponent } from './create-taxrate.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CreateTaxrateComponent> = {
  component: CreateTaxrateComponent,
  title: 'CreateTaxrateComponent',
};
export default meta;
type Story = StoryObj<CreateTaxrateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
