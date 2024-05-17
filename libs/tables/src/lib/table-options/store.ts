import { IStoreRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const STORE_COLUMNS: TableRow<IStoreRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IStoreRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IStoreRaw) => v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IStoreRaw) => v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const STORE_DISPLAY_COLUMNS: TableRow<IStoreRaw>[] = [...STORE_COLUMNS];

export const STORE_PAGE_SIZE = 4;
