import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteNotificationComponent } from './delete-notification.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteNotificationComponent> = {
  component: DeleteNotificationComponent,
  title: 'DeleteNotificationComponent',
};
export default meta;
type Story = StoryObj<DeleteNotificationComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
