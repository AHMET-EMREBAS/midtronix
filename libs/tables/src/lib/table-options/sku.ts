import { ISkuRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const SKU_COLUMNS: TableRow<ISkuRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'price' },
  { name: 'cost' },
  // { name: 'description' },
  { name: 'product', map: (v: ISkuRaw) => v.product?.name },
  { name: 'productUpc', map: (v: ISkuRaw) => v.product?.upc },

  { name: 'category', map: (v: ISkuRaw) => v.product?.category?.name },
  { name: 'department', map: (v: ISkuRaw) => v.product?.department?.name },
  // {
  //   name: 'createdAt',
  //   label: 'Created At',
  //   map: (v: ISkuRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  // },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ISkuRaw) => v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  // {
  //   name: 'deletedAt',
  //   label: 'Deleted At',
  //   map: (v: ISkuRaw) => v.deletedAt && new Date(v.deletedAt).toDateString(),
  // },
];

export const SKU_DISPLAY_COLUMNS: TableRow<ISkuRaw>[] = [...SKU_COLUMNS];

export const SKU_PAGE_SIZE = 4;
