import type { Meta, StoryObj } from '@storybook/angular';
import { ModulesComponent } from './modules.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ModulesComponent> = {
  component: ModulesComponent,
  title: 'ModulesComponent',
};
export default meta;
type Story = StoryObj<ModulesComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/modules works!/gi)).toBeTruthy();
  },
};
