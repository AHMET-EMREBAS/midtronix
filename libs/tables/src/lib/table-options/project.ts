import { IProject } from '@mdtx/common';

export const PROJECT_COLUMNS: (keyof IProject)[] = [
  'id',
  'name',
  'description',
];
export const PROJECT_DISPLAY_COLUMNS: (keyof IProject)[] = [
  'id',
  'name',
  'description',
];
export const PROJECT_PAGE_SIZE = 500;
