import { IPriceRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRICE_COLUMNS: TableRow<IPriceRaw>[] = [
  { name: 'id' },
  { name: 'name', map: (v: IPriceRaw) => v.sku.name },
  { name: 'description', map: (v: IPriceRaw) => v.sku.description },
  { name: 'barcode', map: (v: IPriceRaw) => v.sku.upc },
  { name: 'price' },
  { name: 'cost' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const PRICE_DISPLAY_COLUMNS: TableRow<IPriceRaw>[] = [...PRICE_COLUMNS];

export const PRICE_PAGE_SIZE = 4;
