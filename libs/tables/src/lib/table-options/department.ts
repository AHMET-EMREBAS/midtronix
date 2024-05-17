import { IDepartmentRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const DEPARTMENT_COLUMNS: TableRow<IDepartmentRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const DEPARTMENT_DISPLAY_COLUMNS: TableRow<IDepartmentRaw>[] = [
  ...DEPARTMENT_COLUMNS,
];

export const DEPARTMENT_PAGE_SIZE = 4;
