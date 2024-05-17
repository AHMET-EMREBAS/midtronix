import { ISprintRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const SPRINT_COLUMNS: TableRow<ISprintRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'project', map: (v: ISprintRaw) => v.project?.name },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const SPRINT_DISPLAY_COLUMNS: TableRow<ISprintRaw>[] = [
  ...SPRINT_COLUMNS,
];

export const SPRINT_PAGE_SIZE = 4;
