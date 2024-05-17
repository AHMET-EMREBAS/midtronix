import { ITaskRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const TASK_COLUMNS: TableRow<ITaskRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  { name: 'due' },
  { name: 'startDate' },
  { name: 'finishDate' },
  { name: 'difficulty' },
  { name: 'status' },
  {
    name: 'assignees',
    map: (v: ITaskRaw) => v.assignees?.map((e) => e.username).join(', '),
  },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ITaskRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ITaskRaw) => v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ITaskRaw) => v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const TASK_DISPLAY_COLUMNS: TableRow<ITaskRaw>[] = [...TASK_COLUMNS];

export const TASK_PAGE_SIZE = 4;
