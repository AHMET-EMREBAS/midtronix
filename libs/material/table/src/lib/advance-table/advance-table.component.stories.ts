import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AdvanceTableComponent } from './advance-table.component';

import { within } from '@storybook/testing-library';
import {
  provideAdvanceTableDataService,
  provideAdvanceTableMetadata,
} from './advance-table.providers';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  provideEntityData,
  withEffects,
} from '@ngrx/data';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { ISample, SampleMetadata } from '@mdtx/models';
import { Injectable } from '@angular/core';

@Injectable()
class SampleService extends EntityCollectionServiceBase<ISample> {
  constructor(factory: EntityCollectionServiceElementsFactory) {
    super('Sample', factory);
  }
}

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
              Sample: 'Samples',
            },
            entityMetadata: {
              Sample: {},
            },
          },
          withEffects()
        ),
        provideRouter([]),
        provideAnimations(),
        provideAdvanceTableMetadata(SampleMetadata),
        provideAdvanceTableDataService(SampleService),
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
