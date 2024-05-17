import { IProjectRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PROJECT_COLUMNS: TableRow<IProjectRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IProjectRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IProjectRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IProjectRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const PROJECT_DISPLAY_COLUMNS: TableRow<IProjectRaw>[] = [
  ...PROJECT_COLUMNS,
];

export const PROJECT_PAGE_SIZE = 4;
