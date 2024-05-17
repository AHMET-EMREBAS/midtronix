import { IRoleRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const ROLE_COLUMNS: TableRow<IRoleRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  {
    name: 'permissions',
    map: (e: IRoleRaw) => e.permissions?.map((e) => e.name).join(', '),
  },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const ROLE_DISPLAY_COLUMNS: TableRow<IRoleRaw>[] = [...ROLE_COLUMNS];

export const ROLE_PAGE_SIZE = 4;
