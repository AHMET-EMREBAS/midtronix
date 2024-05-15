import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { SkuTableComponent } from './sku-table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
import { storyBookHttpInterceptor } from '../../__base';
import { provideMatFormFieldOptions } from '@mdtx/material/core';

const meta: Meta<SkuTableComponent> = {
  component: SkuTableComponent,
  title: 'SkuTableComponent',

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
              Sku: 'Categories',
            },
            entityMetadata: {
              Sku: {},
            },
          },
          withEffects()
        ),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<SkuTableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // expect(canvas.getByText(/sku-table works!/gi)).toBeTruthy();
  },
};
