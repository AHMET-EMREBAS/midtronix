import type { Meta, StoryObj } from '@storybook/angular';
import { ViewStoreComponent } from './view-store.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewStoreComponent> = {
  component: ViewStoreComponent,
  title: 'ViewStoreComponent',
};
export default meta;
type Story = StoryObj<ViewStoreComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
