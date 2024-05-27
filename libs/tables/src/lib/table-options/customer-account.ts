import { ICustomerAccountRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_ACCOUNT_COLUMNS: TableRow<ICustomerAccountRaw>[] = [
  { name: 'id' },
  { name: 'balance' },
  { name: 'username' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICustomerAccountRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICustomerAccountRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICustomerAccountRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CUSTOMER_ACCOUNT_DISPLAY_COLUMNS: TableRow<ICustomerAccountRaw>[] =
  [...CUSTOMER_ACCOUNT_COLUMNS];

export const CUSTOMER_ACCOUNT_PAGE_SIZE = 4;
