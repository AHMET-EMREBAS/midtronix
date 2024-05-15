import type { Meta, StoryObj } from '@storybook/angular';
import { TicketToolbarComponent } from './ticket-toolbar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TicketToolbarComponent> = {
  component: TicketToolbarComponent,
  title: 'TicketToolbarComponent',
};
export default meta;
type Story = StoryObj<TicketToolbarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
