import { IUser } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const USER_COLUMNS: TableRow<IUser>[] = [
  { name: 'id' },
  'username',
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const USER_DISPLAY_COLUMNS: TableRow<IUser>[] = [...USER_COLUMNS];

export const USER_PAGE_SIZE = 4;
