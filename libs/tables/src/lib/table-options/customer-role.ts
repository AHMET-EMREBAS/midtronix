import { ICustomerRoleRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_ROLE_COLUMNS: TableRow<ICustomerRoleRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  {
    name: 'permissions',
    map: (e: ICustomerRoleRaw) => e.permissions?.map((e) => e.name).join(', '),
  },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICustomerRoleRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICustomerRoleRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICustomerRoleRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CUSTOMER_ROLE_DISPLAY_COLUMNS: TableRow<ICustomerRoleRaw>[] = [
  ...CUSTOMER_ROLE_COLUMNS,
];

export const CUSTOMER_ROLE_PAGE_SIZE = 4;
