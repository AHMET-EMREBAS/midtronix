import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PosOrderEditorComponent } from './pos-order-editor.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideMatFormFieldOptions } from '@mdtx/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { storyBookHttpInterceptor } from '@mdtx/forms';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideEntityData, withEffects } from '@ngrx/data';

const meta: Meta<PosOrderEditorComponent> = {
  component: PosOrderEditorComponent,
  title: 'PosOrderEditorComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideMatFormFieldOptions({ appearance: 'outline' }),
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
              Order: 'Orders',
              OrderView: 'OrderViews',
              Sale: 'Sales',
              SaleView: 'SaleViews',
              Customer: 'Customers',
              Discount: 'Discount',
              DiscountView: 'DiscountViews',
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
              Order: {},
              OrderView: {},
              Sale: {},
              SaleView: {},
              Customer: {},
              Discount: {},
              DiscountView: {},
            },
          },
          withEffects()
        ),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<PosOrderEditorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
