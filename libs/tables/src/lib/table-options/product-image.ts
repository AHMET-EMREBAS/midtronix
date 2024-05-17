import { IProductImageRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRODUCT_IMAGE_COLUMNS: TableRow<IProductImageRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'url' },
  { name: 'product', map: (v: IProductImageRaw) => v.owner?.name },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IProductImageRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IProductImageRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IProductImageRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const PRODUCT_IMAGE_DISPLAY_COLUMNS: TableRow<IProductImageRaw>[] = [
  ...PRODUCT_IMAGE_COLUMNS,
];

export const PRODUCT_IMAGE_PAGE_SIZE = 4;
