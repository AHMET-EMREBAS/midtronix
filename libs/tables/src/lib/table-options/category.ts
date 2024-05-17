import { ICategoryRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CATEGORY_COLUMNS: TableRow<ICategoryRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const CATEGORY_DISPLAY_COLUMNS: TableRow<ICategoryRaw>[] = [
  ...CATEGORY_COLUMNS,
];

export const CATEGORY_PAGE_SIZE = 4;
