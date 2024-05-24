import type { Meta, StoryObj } from '@storybook/angular';
import { PosOrderCardListComponent } from './pos-order-card-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PosOrderCardListComponent> = {
  component: PosOrderCardListComponent,
  title: 'PosOrderCardListComponent',
};
export default meta;
type Story = StoryObj<PosOrderCardListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pos-order-card-list works!/gi)).toBeTruthy();
  },
};
