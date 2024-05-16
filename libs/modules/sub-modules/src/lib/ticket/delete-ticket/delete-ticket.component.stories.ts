import type { Meta, StoryObj } from '@storybook/angular';
import { DeleteTicketComponent } from './delete-ticket.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DeleteTicketComponent> = {
  component: DeleteTicketComponent,
  title: 'DeleteTicketComponent',
};
export default meta;
type Story = StoryObj<DeleteTicketComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
