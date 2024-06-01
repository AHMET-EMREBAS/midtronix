import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AdvanceTableComponent } from './advance-table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {
  provideAdvanceTableBulkActions,
  provideAdvanceTableColumns,
  provideAdvanceTableDataService,
  provideAdvanceTableRowActions,
} from './advance-table.providers';
import { IAdvanceTableDataService } from './advance-table-data.service';
import { IID } from '@mdtx/common';
import { Observable, of } from 'rxjs';

class AdvanceTableService implements IAdvanceTableDataService<IID> {
  entities$: Observable<IID[]> = of([]);
  count$: Observable<number> = of(100);

  getWithQuery(query: Record<string, any>): Observable<IID[]> {
    throw new Error('Method not implemented.');
  }
}

const meta: Meta<AdvanceTableComponent> = {
  component: AdvanceTableComponent,
  title: 'AdvanceTableComponent',

  decorators: [
    applicationConfig({
      providers: [
        provideAdvanceTableColumns(['Column 1', 'Column 2']),
        provideAdvanceTableBulkActions([]),
        provideAdvanceTableRowActions([]),
        provideAdvanceTableDataService(AdvanceTableService),
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
    expect(canvas.getByText(/advance-table works!/gi)).toBeTruthy();
  },
};
