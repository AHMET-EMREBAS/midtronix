import { IPermissionRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PERMISSION_COLUMNS: TableRow<IPermissionRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IPermissionRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IPermissionRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IPermissionRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const PERMISSION_DISPLAY_COLUMNS: TableRow<IPermissionRaw>[] = [
  ...PERMISSION_COLUMNS,
];

export const PERMISSION_PAGE_SIZE = 4;
