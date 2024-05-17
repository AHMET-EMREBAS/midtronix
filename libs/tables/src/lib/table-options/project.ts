import { IProject } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PROJECT_COLUMNS: TableRow<IProject>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const PROJECT_DISPLAY_COLUMNS: TableRow<IProject>[] = [
  ...PROJECT_COLUMNS,
];

export const PROJECT_PAGE_SIZE = 4;
