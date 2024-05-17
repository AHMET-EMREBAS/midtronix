import { IUserEmailRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const USER_EMAIL_COLUMNS: TableRow<IUserEmailRaw>[] = [
  { name: 'id' },
  { name: 'email' },
  { name: 'owner', map: (v: IUserEmailRaw) => v.owner?.username },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const USER_EMAIL_DISPLAY_COLUMNS: TableRow<IUserEmailRaw>[] = [
  ...USER_EMAIL_COLUMNS,
];

export const USER_EMAIL_PAGE_SIZE = 4;
