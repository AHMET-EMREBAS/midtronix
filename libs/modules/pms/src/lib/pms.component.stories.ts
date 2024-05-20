import type { Meta, StoryObj } from '@storybook/angular';
import { PmsComponent } from './pms.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<PmsComponent> = {
  component: PmsComponent,
  title: 'PmsComponent',
};
export default meta;
type Story = StoryObj<PmsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/pms works!/gi)).toBeTruthy();
  },
};
