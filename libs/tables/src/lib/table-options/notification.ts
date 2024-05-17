import { INotification } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const NOTIFICATION_COLUMNS: TableRow<INotification>[] = [
  { name: 'id' },
  { name: 'message' },
  { name: 'source', label: From, map: (v: IMessage) => v.source?.username },
  { name: 'target', label: To, map: (v: IMessage) => v.target?.username },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const NOTIFICATION_DISPLAY_COLUMNS: TableRow<INotification>[] = [
  ...NOTIFICATION_COLUMNS,
];

export const NOTIFICATION_PAGE_SIZE = 4;
