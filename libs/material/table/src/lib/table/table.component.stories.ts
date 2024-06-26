import {
  applicationConfig,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { TableComponent } from './table.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { provideAnimations } from '@angular/platform-browser/animations';

const meta: Meta<TableComponent> = {
  component: TableComponent,
  title: 'TableComponent',
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};
export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {
    columns: [
      { name: 'id' },
      { name: 'name' },
      { name: 'category', map: (e) => e.category.name },
    ],
    displayedColumns: [
      { name: 'id' },
      { name: 'name' },
      { name: 'category', map: (e) => e.category.name },
    ],
    dataSource: [
      { id: 1, name: 'item 1', category: { name: 'Cat 1' } },
      { id: 2, name: 'item 2', category: { name: 'Cat 2' } },
      { id: 3, name: 'item 3', category: { name: 'Cat 3' } },
      { id: 4, name: 'item 4', category: { name: 'Cat 4' } },
      { id: 5, name: 'item 5', category: { name: 'Cat 5' } },
      { id: 6, name: 'item 6', category: { name: 'Cat 6' } },
      { id: 7, name: 'item 7', category: { name: 'Cat 7' } },
      { id: 8, name: 'item 8', category: { name: 'Cat 8' } },
      { id: 9, name: 'item 9', category: { name: 'Cat 9' } },
      { id: 10, name: 'item 10', category: { name: 'Cat 10' } },
    ],
  },
};

export const Heading: Story = {
  args: Primary.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
