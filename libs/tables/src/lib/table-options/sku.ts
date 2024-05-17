import { ISku } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const SKU_COLUMNS: TableRow<ISku>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  { name: 'product', map: (v: ISku) => v.product.name },
  { name: 'productUpc', map: (v: ISku) => v.product.upc },
  { name: 'category', map: (v: ISku) => v.product.category.name },
  { name: 'department', map: (v: ISku) => v.product.department.name },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const SKU_DISPLAY_COLUMNS: TableRow<ISku>[] = [...SKU_COLUMNS];

export const SKU_PAGE_SIZE = 4;
