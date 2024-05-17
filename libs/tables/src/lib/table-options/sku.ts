import { ISkuRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const SKU_COLUMNS: TableRow<ISkuRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  { name: 'product', map: (v: ISkuRaw) => v.product?.name },
  { name: 'productUpc', map: (v: ISkuRaw) => v.product?.upc },
  { name: 'category', map: (v: ISkuRaw) => v.product?.category?.name },
  { name: 'department', map: (v: ISkuRaw) => v.product?.department?.name },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const SKU_DISPLAY_COLUMNS: TableRow<ISkuRaw>[] = [...SKU_COLUMNS];

export const SKU_PAGE_SIZE = 4;
