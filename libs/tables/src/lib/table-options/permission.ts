import { IPermission } from '@mdtx/common';

export const PERMISSION_COLUMNS: (keyof IPermission)[] = ['id', 'name'];
export const PERMISSION_DISPLAY_COLUMNS: (keyof IPermission)[] = ['id', 'name'];
export const PERMISSION_PAGE_SIZE = 500;
