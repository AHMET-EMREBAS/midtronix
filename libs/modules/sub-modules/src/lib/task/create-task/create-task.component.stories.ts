import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CreateTaskComponent } from './create-task.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { storyBookHttpInterceptor } from '@mdtx/forms';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideMatFormFieldOptions } from '@mdtx/material/core';

const meta: Meta<CreateTaskComponent> = {
  component: CreateTaskComponent,
  title: 'CreateTaskComponent',

  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideHttpClient(withInterceptors(storyBookHttpInterceptor)),
        provideStore(),
        provideEffects([]),
        provideEntityData(
          {
            pluralNames: {
              Task: 'Tasks',
            },
            entityMetadata: {
              Task: {},
            },
          },
          withEffects()
        ),
        provideMatFormFieldOptions({ appearance: 'outline' }),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<CreateTaskComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
