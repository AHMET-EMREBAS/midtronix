import { ICustomerRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_COLUMNS: TableRow<ICustomerRaw>[] = [
  { name: 'id' },
  { name: 'username' },
  {
    name: 'roles',
    map: (v: ICustomerRaw) => v.roles?.map((e) => e.name).join(','),
  },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const CUSTOMER_DISPLAY_COLUMNS: TableRow<ICustomerRaw>[] = [
  ...CUSTOMER_COLUMNS,
];

export const CUSTOMER_PAGE_SIZE = 4;
