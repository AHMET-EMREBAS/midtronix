import { IPrice } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRICE_COLUMNS: TableRow<IPrice>[] = [
  { name: 'id' },
  { name: 'name', map: (v: IPrice) => v.sku.name },
  { name: 'description', map: (v: IPrice) => v.sku.description },
  { name: 'barcode', map: (v: IPrice) => v.sku.upc },
  { name: 'price' },
  { name: 'cost' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const PRICE_DISPLAY_COLUMNS: TableRow<IPrice>[] = [...PRICE_COLUMNS];

export const PRICE_PAGE_SIZE = 4;
