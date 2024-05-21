import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteTaxrateComponent } from './delete-taxrate.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteTaxrateComponent> = {
  component: DeleteTaxrateComponent,
  title: 'DeleteTaxrateComponent',
};
export default meta;
type Story = StoryObj<DeleteTaxrateComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
