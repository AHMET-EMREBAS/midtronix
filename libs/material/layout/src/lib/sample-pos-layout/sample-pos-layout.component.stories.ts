import {
  applicationConfig,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SamplePosLayoutComponent } from './sample-pos-layout.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PosLayoutModule } from '../pos-layout/pos-layout.module';

const meta: Meta<SamplePosLayoutComponent> = {
  component: SamplePosLayoutComponent,
  title: 'SamplePosLayoutComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
    moduleMetadata({
      imports: [PosLayoutModule],
    }),
  ],
};
export default meta;
type Story = StoryObj<SamplePosLayoutComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
