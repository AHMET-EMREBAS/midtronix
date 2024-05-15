import { ITask } from '@mdtx/common';

export const TASK_COLUMNS: (keyof ITask)[] = [
  'id',
  'name',
  'description',
  'due',
  'startDate',
  'finishDate',
  'difficulty',
  'status',
];
export const TASK_DISPLAY_COLUMNS: (keyof ITask)[] = [
  'id',
  'name',
  'description',
  'due',
  'startDate',
  'finishDate',
  'difficulty',
  'status',
];
export const TASK_PAGE_SIZE = 500;
