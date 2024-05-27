import { ISkuViewRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const SKU_VIEW_COLUMNS: TableRow<ISkuViewRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { prefix: '$', name: 'cost' },
  { prefix: '$', name: 'price' },
  { label: 'Price Level', name: 'priceLevelName' },

  { prefix: '#', label: 'Quantity', name: 'quantity' },
  { label: 'Store', name: 'storeName' },

  // {
  //   name: 'createdAt',
  //   label: 'Created At',
  //   map: (v: ISkuViewRaw) =>
  //     v.createdAt && new Date(v.updatedAt).toDateString(),
  // },
  // {
  //   name: 'updatedAt',
  //   label: 'Updated At',
  //   map: (v: ISkuViewRaw) =>
  //     v.updatedAt && new Date(v.updatedAt).toDateString(),
  // },
  // {
  //   name: 'deletedAt',
  //   label: 'Deleted At',
  //   map: (v: ISkuViewRaw) =>
  //     v.deletedAt && new Date(v.deletedAt).toDateString(),
  // },
];

export const SKU_VIEW_DISPLAY_COLUMNS: TableRow<ISkuViewRaw>[] = [
  ...SKU_VIEW_COLUMNS,
];

export const SKU_VIEW_PAGE_SIZE = 4;
