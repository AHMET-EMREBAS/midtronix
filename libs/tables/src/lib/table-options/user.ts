import { IUser } from '@mdtx/common';

export const USER_COLUMNS: (keyof IUser)[] = ['id', 'username'];
export const USER_DISPLAY_COLUMNS: (keyof IUser)[] = ['id', 'username'];
export const USER_PAGE_SIZE = 500;
