import { IProductRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRODUCT_COLUMNS: TableRow<IProductRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  {
    name: 'category',
    label: 'category',
    map: (v: IProductRaw) => v.category?.name,
  },
  {
    name: 'department',
    label: 'department',
    map: (v: IProductRaw) => v.department?.name,
  },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IProductRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IProductRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IProductRaw) =>
      v.createdAt && new Date(v.deletedAt).toDateString(),
  },
];

export const PRODUCT_DISPLAY_COLUMNS: TableRow<IProductRaw>[] = [
  ...PRODUCT_COLUMNS,
];

export const PRODUCT_PAGE_SIZE = 4;
