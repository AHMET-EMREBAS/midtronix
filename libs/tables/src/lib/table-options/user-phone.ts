import { IUserPhone } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const USER_PHONE_COLUMNS: TableRow<IUserPhone>[] = [
  { name: 'id' },
  { name: 'phone' },
  { name: 'customer', map: (v: ICustomerEmail) => v.owner.username },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const USER_PHONE_DISPLAY_COLUMNS: TableRow<IUserPhone>[] = [
  ...USER_PHONE_COLUMNS,
];

export const USER_PHONE_PAGE_SIZE = 4;
