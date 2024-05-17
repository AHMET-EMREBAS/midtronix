import { ICustomerEmail } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_EMAIL_COLUMNS: TableRow<ICustomerEmail>[] = [
  { name: 'id' },
  { name: 'email' },
  { name: 'customer', map: (v: ICustomerEmail) => v.owner.username },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const CUSTOMER_EMAIL_DISPLAY_COLUMNS: TableRow<ICustomerEmail>[] = [
  ...CUSTOMER_EMAIL_COLUMNS,
];

export const CUSTOMER_EMAIL_PAGE_SIZE = 4;
