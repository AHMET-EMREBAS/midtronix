import { IQuantityRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const QUANTITY_COLUMNS: TableRow<IQuantityRaw>[] = [
  { name: 'id' },
  { name: 'name', map: (v: IPriceRaw) => v.sku.name },
  { name: 'description', map: (v: IPriceRaw) => v.sku?.description },
  { name: 'barcode', map: (v: IPriceRaw) => v.sku?.upc },
  { name: 'store', map: (v: IPriceRaw) => v.store?.name },
  { name: 'quantity' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const QUANTITY_DISPLAY_COLUMNS: TableRow<IQuantityRaw>[] = [
  ...QUANTITY_COLUMNS,
];

export const QUANTITY_PAGE_SIZE = 4;
