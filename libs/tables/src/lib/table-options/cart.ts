import { ICartRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CART_COLUMNS: TableRow<ICartRaw>[] = [
  { name: 'id' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICartRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICartRaw) => v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICartRaw) => v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CART_DISPLAY_COLUMNS: TableRow<ICartRaw>[] = [...CART_COLUMNS];

export const CART_PAGE_SIZE = 4;
