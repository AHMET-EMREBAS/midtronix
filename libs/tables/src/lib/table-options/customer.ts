import { ICustomer } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_COLUMNS: TableRow<ICustomer>[] = [
  { name: 'id' },
  { name: 'username' },
  {
    name: 'roles',
    map: (v: ICustomer) => v.roles?.map((e) => e.name).join(','),
  },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const CUSTOMER_DISPLAY_COLUMNS: TableRow<ICustomer>[] = [
  ...CUSTOMER_COLUMNS,
];

export const CUSTOMER_PAGE_SIZE = 4;
