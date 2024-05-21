import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PosComponent } from './pos.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

import { storyBookHttpInterceptor } from '@mdtx/forms';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideMatFormFieldOptions } from '@mdtx/material/core';
const meta: Meta<PosComponent> = {
  component: PosComponent,
  title: 'PosComponent',

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
              Product: 'Products',
              Sku: 'Skus',
              Price: 'Prices',
              PriceLevel: 'PriceLevels',
              Store: 'Stores',
              Quantity: 'Quantities',
              SkuView: 'SkuViews',
              Cart: 'Carts',
            },
            entityMetadata: {
              Sku: {},
              SkuView: {},
              Product: {},
              Price: {},
              PriceLevel: {},
              Store: {},
              Quantity: {},
              Cart: {},
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
type Story = StoryObj<PosComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
