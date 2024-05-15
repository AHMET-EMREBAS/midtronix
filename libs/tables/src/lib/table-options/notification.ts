import { INotification } from '@mdtx/common';

export const NOTIFICATION_COLUMNS: (keyof INotification)[] = ['id', 'message'];
export const NOTIFICATION_DISPLAY_COLUMNS: (keyof INotification)[] = [
  'id',
  'message',
];
export const NOTIFICATION_PAGE_SIZE = 500;
