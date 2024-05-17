import { IQuantityRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const QUANTITY_COLUMNS: TableRow<IQuantityRaw>[] = [
  { name: 'id' },
  { name: 'name', map: (v: IQuantityRaw) => v.sku.name },
  { name: 'description', map: (v: IQuantityRaw) => v.sku?.description },
  { name: 'barcode', map: (v: IQuantityRaw) => v.sku?.upc },
  { name: 'store', map: (v: IQuantityRaw) => v.store?.name },
  { name: 'quantity' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IQuantityRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IQuantityRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IQuantityRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const QUANTITY_DISPLAY_COLUMNS: TableRow<IQuantityRaw>[] = [
  ...QUANTITY_COLUMNS,
];

export const QUANTITY_PAGE_SIZE = 4;
