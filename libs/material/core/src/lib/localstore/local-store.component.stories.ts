import type { Meta, StoryObj } from '@storybook/angular';
import { LocalStoreComponent } from './local-store.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<LocalStoreComponent> = {
  component: LocalStoreComponent,
  title: 'LocalStoreComponent',
};
export default meta;
type Story = StoryObj<LocalStoreComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/local-store works!/gi)).toBeTruthy();
  },
};
