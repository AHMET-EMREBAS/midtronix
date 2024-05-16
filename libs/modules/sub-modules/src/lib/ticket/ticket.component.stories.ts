import type { Meta, StoryObj } from '@storybook/angular';
import { TicketComponent } from './ticket.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TicketComponent> = {
  component: TicketComponent,
  title: 'TicketComponent',
};
export default meta;
type Story = StoryObj<TicketComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
