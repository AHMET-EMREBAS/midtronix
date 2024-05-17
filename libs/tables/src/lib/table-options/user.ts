import { IUserRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const USER_COLUMNS: TableRow<IUserRaw>[] = [
  { name: 'id' },
  { name: 'username' },
  {
    name: 'roles',
    map: (v: IUserRaw) => v.roles?.map((e) => e.name).join(','),
  },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IUserRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IUserRaw) => v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IUserRaw) => v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const USER_DISPLAY_COLUMNS: TableRow<IUserRaw>[] = [...USER_COLUMNS];

export const USER_PAGE_SIZE = 4;
