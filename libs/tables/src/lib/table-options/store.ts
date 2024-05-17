import { IStoreRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const STORE_COLUMNS: TableRow<IStoreRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const STORE_DISPLAY_COLUMNS: TableRow<IStoreRaw>[] = [...STORE_COLUMNS];

export const STORE_PAGE_SIZE = 4;
