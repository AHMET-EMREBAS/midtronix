import { ICustomerPhone } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_PHONE_COLUMNS: TableRow<ICustomerPhone>[] = [
  { name: 'id' },
  { name: 'phone' },
  { name: 'customer', map: (v: ICustomerEmail) => v.owner.username },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const CUSTOMER_PHONE_DISPLAY_COLUMNS: TableRow<ICustomerPhone>[] = [
  ...CUSTOMER_PHONE_COLUMNS,
];

export const CUSTOMER_PHONE_PAGE_SIZE = 4;
