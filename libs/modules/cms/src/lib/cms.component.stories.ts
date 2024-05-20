import type { Meta, StoryObj } from '@storybook/angular';
import { CmsComponent } from './cms.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CmsComponent> = {
  component: CmsComponent,
  title: 'CmsComponent',
};
export default meta;
type Story = StoryObj<CmsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/cms works!/gi)).toBeTruthy();
  },
};
