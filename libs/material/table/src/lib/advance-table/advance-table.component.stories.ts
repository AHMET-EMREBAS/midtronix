import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { AdvanceTableComponent } from './advance-table.component';

import { within } from '@storybook/testing-library';
import {
  provideAdvanceTableBulkActions,
  provideAdvanceTableColumns,
  provideAdvanceTableDataService,
  provideAdvanceTableRowActions,
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
        provideAdvanceTableColumns([
          { name: 'id', label: '#' },
          { name: 'name' },
          { name: 'category' },
        ]),
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
  },
};
