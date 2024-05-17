import { ISprint } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const SPRINT_COLUMNS: TableRow<ISprint>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'project', map: (v: ISprint) => v.project?.name },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const SPRINT_DISPLAY_COLUMNS: TableRow<ISprint>[] = [...SPRINT_COLUMNS];

export const SPRINT_PAGE_SIZE = 4;
