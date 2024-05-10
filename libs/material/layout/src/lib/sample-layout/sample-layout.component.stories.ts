import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SampleLayoutComponent } from './sample-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<SampleLayoutComponent> = {
  component: SampleLayoutComponent,
  title: 'SampleLayoutComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<SampleLayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sample-layout works!/gi)).toBeTruthy();
  },
};
