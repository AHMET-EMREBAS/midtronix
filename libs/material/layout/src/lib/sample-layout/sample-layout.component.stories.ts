import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SampleLayoutComponent } from './sample-layout.component';
import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { SampleLayoutRoutes } from './sample-layout.routes';

const meta: Meta<SampleLayoutComponent> = {
  component: SampleLayoutComponent,
  title: 'SampleLayoutComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        importProvidersFrom(RouterModule.forRoot(SampleLayoutRoutes)),
      ],
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
  },
};
