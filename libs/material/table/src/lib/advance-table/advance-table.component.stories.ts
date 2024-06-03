import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AdvanceTableComponent } from './advance-table.component';

import { within } from '@storybook/testing-library';
import {
  provideAdvanceTableDataService,
  provideAdvanceTableOptions,
} from './advance-table.providers';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { provideEntityData, withEffects } from '@ngrx/data';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { ProductService } from '@mdtx/ngrx';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
const meta: Meta<AdvanceTableComponent> = {
  component: AdvanceTableComponent,
  title: 'AdvanceTableComponent',

  decorators: [
    applicationConfig({
      providers: [
        provideHttpClient(
          withInterceptors([
            (req, next) => {
              const nreq = req.clone({
                url: `http://localhost:3000/${req.url}`,
              });
              return next(nreq);
            },
          ])
        ),
        provideStore({}),
        provideEffects([]),
        provideEntityData(
          {
            pluralNames: {
              Product: 'Products',
            },
            entityMetadata: {
              Product: {},
            },
          },
          withEffects()
        ),
        provideRouter([]),
        provideAnimations(),
        provideAdvanceTableOptions({
          columns: [
            { name: 'id', label: '#' },
            { name: 'name', label: 'name' },
            { name: 'category', label: 'category' },
            { name: 'department', label: 'department' },
          ],
          displayColumns: [
            { name: 'id' },
            { name: 'name' },
            { name: 'category' },
            { name: 'department' },
          ],
          bulkActions: [],
          rowActions: [],
        }),
        provideAdvanceTableDataService(ProductService),
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<AdvanceTableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
