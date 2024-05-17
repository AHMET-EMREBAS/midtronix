import { IQuantity } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const QUANTITY_COLUMNS: TableRow<IQuantity>[] = [
  { name: 'id' },
  { name: 'name', map: (v: IPrice) => v.sku.name },
  { name: 'description', map: (v: IPrice) => v.sku?.description },
  { name: 'barcode', map: (v: IPrice) => v.sku?.upc },
  { name: 'store', map: (v: IPrice) => v.store?.name },
  { name: 'quantity' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const QUANTITY_DISPLAY_COLUMNS: TableRow<IQuantity>[] = [
  ...QUANTITY_COLUMNS,
];

export const QUANTITY_PAGE_SIZE = 4;
