import type { Meta, StoryObj } from '@storybook/angular';
import { UserToolbarComponent } from './user-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserToolbarComponent> = {
  component: UserToolbarComponent,
  title: 'UserToolbarComponent',
};
export default meta;
type Story = StoryObj<UserToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
