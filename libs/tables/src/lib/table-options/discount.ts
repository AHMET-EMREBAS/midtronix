import { IDiscountRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const DISCOUNT_COLUMNS: TableRow<IDiscountRaw>[] = [
  { name: 'id' },
  { name: 'fixed' },
  { name: 'percent' },
  { name: 'startDate' },
  { name: 'endDate' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IDiscountRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IDiscountRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IDiscountRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const DISCOUNT_DISPLAY_COLUMNS: TableRow<IDiscountRaw>[] = [
  ...DISCOUNT_COLUMNS,
];

export const DISCOUNT_PAGE_SIZE = 4;
