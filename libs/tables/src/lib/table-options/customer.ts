import { ICustomerRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_COLUMNS: TableRow<ICustomerRaw>[] = [
  { name: 'id' },
  { name: 'username' },
  {
    name: 'roles',
    map: (v: ICustomerRaw) => v.roles?.map((e) => e.name).join(','),
  },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICustomerRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICustomerRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICustomerRaw) =>
      v.createdAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CUSTOMER_DISPLAY_COLUMNS: TableRow<ICustomerRaw>[] = [
  ...CUSTOMER_COLUMNS,
];

export const CUSTOMER_PAGE_SIZE = 4;
