import type { Meta, StoryObj } from '@storybook/angular';
import { NotificationToolbarComponent } from './notification-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NotificationToolbarComponent> = {
  component: NotificationToolbarComponent,
  title: 'NotificationToolbarComponent',
};
export default meta;
type Story = StoryObj<NotificationToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
