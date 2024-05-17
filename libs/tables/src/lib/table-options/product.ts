import { IProduct } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRODUCT_COLUMNS: TableRow<IProduct>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  { name: 'category', label: category, map: (v: IProduct) => v.category.name },
  {
    name: 'department',
    label: department,
    map: (v: IProduct) => v.department.name,
  },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const PRODUCT_DISPLAY_COLUMNS: TableRow<IProduct>[] = [
  ...PRODUCT_COLUMNS,
];

export const PRODUCT_PAGE_SIZE = 4;
