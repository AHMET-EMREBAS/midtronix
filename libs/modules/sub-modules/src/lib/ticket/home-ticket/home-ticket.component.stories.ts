import type { Meta, StoryObj } from '@storybook/angular';
import { HomeTicketComponent } from './home-ticket.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<HomeTicketComponent> = {
  component: HomeTicketComponent,
  title: 'HomeTicketComponent',
};
export default meta;
type Story = StoryObj<HomeTicketComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/home-ticket works!/gi)).toBeTruthy();
  },
};
