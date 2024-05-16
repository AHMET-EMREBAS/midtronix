import type { Meta, StoryObj } from '@storybook/angular';
import { ViewNotificationComponent } from './view-notifications.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ViewNotificationComponent> = {
  component: ViewNotificationComponent,
  title: 'ViewNotificationComponent',
};
export default meta;
type Story = StoryObj<ViewNotificationComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
