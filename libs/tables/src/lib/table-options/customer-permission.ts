import { ICustomerPermissionRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_PERMISSION_COLUMNS: TableRow<ICustomerPermissionRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICustomerPermissionRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICustomerPermissionRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICustomerPermissionRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CUSTOMER_PERMISSION_DISPLAY_COLUMNS: TableRow<ICustomerPermissionRaw>[] = [
  ...CUSTOMER_PERMISSION_COLUMNS,
];

export const CUSTOMER_PERMISSION_PAGE_SIZE = 4;
