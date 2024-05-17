import { ICustomerEmailRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_EMAIL_COLUMNS: TableRow<ICustomerEmailRaw>[] = [
  { name: 'id' },
  { name: 'username', map: (v: ICustomerEmailRaw) => v.owner?.username },
  { name: 'email' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICustomerEmailRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICustomerEmailRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICustomerEmailRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CUSTOMER_EMAIL_DISPLAY_COLUMNS: TableRow<ICustomerEmailRaw>[] = [
  ...CUSTOMER_EMAIL_COLUMNS,
];

export const CUSTOMER_EMAIL_PAGE_SIZE = 4;
