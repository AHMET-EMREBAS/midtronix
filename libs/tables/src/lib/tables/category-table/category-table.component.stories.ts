import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CategoryTableComponent } from './category-table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { storyBookHttpInterceptor } from '../../__base';
import { provideMatFormFieldOptions } from '@mdtx/material/core';

const meta: Meta<CategoryTableComponent> = {
  component: CategoryTableComponent,
  title: 'CategoryTableComponent',

  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideHttpClient(withInterceptors(storyBookHttpInterceptor)),
        provideMatFormFieldOptions({ appearance: 'outline' }),
        provideStore([]),
        provideEffects([]),
        provideEntityData(
          {
            pluralNames: {
              Category: 'Categories',
            },
            entityMetadata: {
              Category: {},
            },
          },
          withEffects()
        ),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<CategoryTableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/category-table works!/gi)).toBeTruthy();
  },
};
