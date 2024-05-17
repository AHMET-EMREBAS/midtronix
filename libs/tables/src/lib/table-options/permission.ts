import { IPermission } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PERMISSION_COLUMNS: TableRow<IPermission>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const PERMISSION_DISPLAY_COLUMNS: TableRow<IPermission>[] = [
  ...PERMISSION_COLUMNS,
];

export const PERMISSION_PAGE_SIZE = 4;
