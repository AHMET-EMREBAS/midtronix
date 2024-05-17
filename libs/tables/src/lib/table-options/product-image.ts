import { IProductImageRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRODUCT_IMAGE_COLUMNS: TableRow<IProductImageRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'url' },
  { name: 'product', map: (v: IProductImageRaw) => v.owner.name },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const PRODUCT_IMAGE_DISPLAY_COLUMNS: TableRow<IProductImageRaw>[] = [
  ...PRODUCT_IMAGE_COLUMNS,
];

export const PRODUCT_IMAGE_PAGE_SIZE = 4;
