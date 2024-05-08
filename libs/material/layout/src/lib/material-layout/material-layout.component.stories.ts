import type { Meta, StoryObj } from '@storybook/angular';
import { MaterialLayoutComponent } from './material-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MaterialLayoutComponent> = {
  component: MaterialLayoutComponent,
  title: 'MaterialLayoutComponent',
};
export default meta;
type Story = StoryObj<MaterialLayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/material-layout works!/gi)).toBeTruthy();
  },
};
