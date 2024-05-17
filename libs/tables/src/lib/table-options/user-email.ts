import { IUserEmailRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const USER_EMAIL_COLUMNS: TableRow<IUserEmailRaw>[] = [
  { name: 'id' },
  { name: 'email' },
  { name: 'owner', map: (v: IUserEmailRaw) => v.owner?.username },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IUserEmailRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IUserEmailRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IUserEmailRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const USER_EMAIL_DISPLAY_COLUMNS: TableRow<IUserEmailRaw>[] = [
  ...USER_EMAIL_COLUMNS,
];

export const USER_EMAIL_PAGE_SIZE = 4;
