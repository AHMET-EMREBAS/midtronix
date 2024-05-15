import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SidebarComponent> = {
  component: SidebarComponent,
  title: 'SidebarComponent',
};
export default meta;
type Story = StoryObj<SidebarComponent>;

export const Primary: Story = {
  args: {
    topToolbarItems: [
      { id: 1, title: 'Home', icon: 'home' },
      { id: 2, title: 'About', icon: 'info' },
    ],
    bottomToolbarItems: [
      { id: 3, title: 'Home', icon: 'home' },
      { id: 4, title: 'About', icon: 'info' },
    ],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
