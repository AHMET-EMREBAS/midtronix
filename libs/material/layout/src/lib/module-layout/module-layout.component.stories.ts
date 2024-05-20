import type { Meta, StoryObj } from '@storybook/angular';
import { ModuleLayoutComponent } from './module-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ModuleLayoutComponent> = {
  component: ModuleLayoutComponent,
  title: 'ModuleLayoutComponent',
};
export default meta;
type Story = StoryObj<ModuleLayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/module-layout works!/gi)).toBeTruthy();
  },
};
