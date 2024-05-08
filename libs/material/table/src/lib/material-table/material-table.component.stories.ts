/* eslint-disable @nx/enforce-module-boundaries */
import type { Meta, StoryObj } from '@storybook/angular';
import { MaterialTableComponent } from './material-table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MaterialTableComponent> = {
  component: MaterialTableComponent,
  title: 'MaterialTableComponent',
};
export default meta;
type Story = StoryObj<MaterialTableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/material-table works!/gi)).toBeTruthy();
  },
};
