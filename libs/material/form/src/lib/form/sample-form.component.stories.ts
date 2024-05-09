import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SampleFormComponent } from './sample-form.component';

import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<SampleFormComponent> = {
  component: SampleFormComponent,
  title: 'SampleFormComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<SampleFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
