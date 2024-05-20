import type { Meta, StoryObj } from '@storybook/angular';
import { HomeStoreComponent } from './home-store.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeStoreComponent> = {
  component: HomeStoreComponent,
  title: 'HomeStoreComponent',
};
export default meta;
type Story = StoryObj<HomeStoreComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-store works!/gi)).toBeTruthy();
  },
};
