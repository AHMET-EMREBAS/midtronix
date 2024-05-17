import { IPriceRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRICE_COLUMNS: TableRow<IPriceRaw>[] = [
  { name: 'id' },
  { name: 'name', map: (v: IPriceRaw) => v.sku.name },
  { name: 'barcode', map: (v: IPriceRaw) => v.sku.upc },
  { name: 'price', prefix: '$' },
  { name: 'cost', prefix: '$' },
  {
    name: 'priceLevel',
    label: 'Price Level',
    map: (v: IPriceRaw) => v.priceLevel.name,
  },
  { name: 'description', map: (v: IPriceRaw) => v.sku.description },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IPriceRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IPriceRaw) => v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IPriceRaw) => v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const PRICE_DISPLAY_COLUMNS: TableRow<IPriceRaw>[] = [...PRICE_COLUMNS];

export const PRICE_PAGE_SIZE = 4;
