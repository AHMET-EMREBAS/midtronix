import { ICustomerEmailRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_EMAIL_COLUMNS: TableRow<ICustomerEmailRaw>[] = [
  { name: 'id' },
  { name: 'email' },
  {
    name: 'owner',
    label: 'Customer',
    map: (v: ICustomerEmailRaw) => v.owner.username,
  },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const CUSTOMER_EMAIL_DISPLAY_COLUMNS: TableRow<ICustomerEmailRaw>[] = [
  ...CUSTOMER_EMAIL_COLUMNS,
];

export const CUSTOMER_EMAIL_PAGE_SIZE = 4;
