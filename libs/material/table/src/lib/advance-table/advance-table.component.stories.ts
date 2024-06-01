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
import { AdvanceTableService } from './demo-advance-table.service';
const meta: Meta<AdvanceTableComponent> = {
  component: AdvanceTableComponent,
  title: 'AdvanceTableComponent',

  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideAdvanceTableOptions({
          columns: [{ name: 'id' }, { name: 'name' }, { name: 'category' }],
          displayColumns: [
            { name: 'id', label: '#' },
            { name: 'name', label: 'name' },
            { name: 'category', label: 'category' },
          ],
          bulkActions: [],
          rowActions: [],
        }),
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
  },
};
