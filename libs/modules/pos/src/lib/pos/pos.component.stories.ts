import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PosComponent } from './pos.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { storyBookHttpInterceptor } from '@mdtx/forms';

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
              Order: 'Orders',
              OrderView: 'OrderViews',
              Sale: 'Sales',
              SaleView: 'SaleViews',
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
            },
          },
          withEffects()
        ),
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
    expect(canvas.getByText(/pos works!/gi)).toBeTruthy();
  },
};
