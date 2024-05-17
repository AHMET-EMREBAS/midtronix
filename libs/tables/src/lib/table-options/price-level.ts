import { IPriceLevel } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRICE_LEVEL_COLUMNS: TableRow<IPriceLevel>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const PRICE_LEVEL_DISPLAY_COLUMNS: TableRow<IPriceLevel>[] = [
  ...PRICE_LEVEL_COLUMNS,
];

export const PRICE_LEVEL_PAGE_SIZE = 4;
