import { ISprintRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const SPRINT_COLUMNS: TableRow<ISprintRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'project', map: (v: ISprintRaw) => v.project?.name },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ISprintRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ISprintRaw) => v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ISprintRaw) => v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const SPRINT_DISPLAY_COLUMNS: TableRow<ISprintRaw>[] = [
  ...SPRINT_COLUMNS,
];

export const SPRINT_PAGE_SIZE = 4;
