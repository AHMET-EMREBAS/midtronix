import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CategoryFormComponent } from './category-form.component';

import { within } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

import {
  provideErrorStateMatcher,
  provideMatFormFieldOptions,
} from '@mdtx/material/core';
const meta: Meta<CategoryFormComponent> = {
  component: CategoryFormComponent,
  title: 'CategoryFormComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideMatFormFieldOptions({ appearance: 'outline' }),
        provideErrorStateMatcher(),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<CategoryFormComponent>;

export const Primary: Story = {};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const nameField = canvas.getByTestId('name-input');
    // expect(canvas.getByText(/category-form works!/gi)).toBeTruthy();
  },
};
