import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { CategorySearchComponent } from './category-search.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpInterceptorFn } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideAnimations } from '@angular/platform-browser/animations';
export const httpInterceptors: HttpInterceptorFn[] = [
  (req, next) => {
    if (req.url) {
      req = req.clone({ url: `http://localhost:3000/${req.url}` });
      return next(req);
    }
    return next(req);
  },
];

const meta: Meta<CategorySearchComponent> = {
  component: CategorySearchComponent,
  title: 'CategorySearchComponent',
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideHttpClient(withInterceptors(httpInterceptors)),
        provideStore([]),
        provideEffects([]),
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
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<CategorySearchComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/category-search works!/gi)).toBeTruthy();
  },
};
