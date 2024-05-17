import { IDepartmentRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const DEPARTMENT_COLUMNS: TableRow<IDepartmentRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IDepartmentRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IDepartmentRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IDepartmentRaw) =>
      v.createdAt && new Date(v.deletedAt).toDateString(),
  },
];

export const DEPARTMENT_DISPLAY_COLUMNS: TableRow<IDepartmentRaw>[] = [
  ...DEPARTMENT_COLUMNS,
];

export const DEPARTMENT_PAGE_SIZE = 4;
