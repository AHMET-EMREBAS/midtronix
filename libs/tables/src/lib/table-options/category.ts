import { ICategoryRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CATEGORY_COLUMNS: TableRow<ICategoryRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICategoryRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICategoryRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICategoryRaw) =>
      v.createdAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CATEGORY_DISPLAY_COLUMNS: TableRow<ICategoryRaw>[] = [
  ...CATEGORY_COLUMNS,
];

export const CATEGORY_PAGE_SIZE = 4;
