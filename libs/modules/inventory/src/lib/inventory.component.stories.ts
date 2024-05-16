import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { InventoryComponent } from './inventory.component';

import { within } from '@storybook/testing-library';
import { RouterModule } from '@angular/router';
import { Component, importProvidersFrom } from '@angular/core';
import { InventoryRoutes } from './inventory.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { storyBookHttpInterceptor } from '@mdtx/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEntityData, withEffects } from '@ngrx/data';
import {
  SidenavLeftBottomProvider,
  SidenavLeftTopProvider,
} from '@mdtx/material/layout';

@Component({
  imports: [RouterModule],
  standalone: true,
  template: `<router-outlet></router-outlet>`,
})
class RouterComponent {}
const meta: Meta<InventoryComponent> = {
  component: RouterComponent,
  title: 'InventoryComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideHttpClient(withInterceptors(storyBookHttpInterceptor)),
        provideStore(),
        provideEffects([]),
        importProvidersFrom(RouterModule.forRoot(InventoryRoutes)),
        provideEntityData(
          {
            pluralNames: {
              Product: 'Products',
              Category: 'Categories',
              Department: 'Departments',
            },
            entityMetadata: {
              Product: {},
              Category: {},
              Department: {},
            },
          },
          withEffects()
        ),

        SidenavLeftTopProvider.provide([
          { label: 'Product', icon: 'inventory_2', route: 'product' },
          { label: 'Sku', icon: 'track_changes', route: 'sku' },
          { divider: true },
          { label: 'Price', icon: 'attach_money', route: 'price' },
          { label: 'Price Level', icon: 'groups_3', route: 'price-level' },
          { divider: true },
          { label: 'Quantity', icon: 'numbers', route: 'quantity' },
          { divider: true },
          { label: 'Category', icon: 'category', route: 'category' },
          { label: 'Department', icon: 'group_work', route: 'department' },
          { divider: true },
          { label: 'Store', icon: 'store', route: 'store' },
        ]),

        SidenavLeftBottomProvider.provide([
          { label: 'Apps', route: '/', icon: 'apps', color: 'accent' },
        ]),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<InventoryComponent>;

export const Primary: Story = {};

export const Heading: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
