import { IPriceLevelRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRICE_LEVEL_COLUMNS: TableRow<IPriceLevelRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IPriceLevelRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IPriceLevelRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IPriceLevelRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const PRICE_LEVEL_DISPLAY_COLUMNS: TableRow<IPriceLevelRaw>[] = [
  ...PRICE_LEVEL_COLUMNS,
];

export const PRICE_LEVEL_PAGE_SIZE = 4;
