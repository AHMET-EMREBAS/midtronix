import { IPurchaseRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PURCHASE_COLUMNS: TableRow<IPurchaseRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'barcode' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IPurchaseRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IPurchaseRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IPurchaseRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const PURCHASE_DISPLAY_COLUMNS: TableRow<IPurchaseRaw>[] = [
  ...PURCHASE_COLUMNS,
];

export const PURCHASE_PAGE_SIZE = 4;
