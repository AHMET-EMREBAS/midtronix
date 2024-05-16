import type { Meta, StoryObj } from '@storybook/angular';
import { ViewUserComponent } from './view-users.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewUserComponent> = {
  component: ViewUserComponent,
  title: 'ViewUserComponent',
};
export default meta;
type Story = StoryObj<ViewUserComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
