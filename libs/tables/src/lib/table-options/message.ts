import { IMessage } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const MESSAGE_COLUMNS: TableRow<IMessage>[] = [
  { name: 'id' },
  { name: 'message' },
  { name: 'source', label: From, map: (v: IMessage) => v.source?.username },
  { name: 'target', label: To, map: (v: IMessage) => v.target?.username },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const MESSAGE_DISPLAY_COLUMNS: TableRow<IMessage>[] = [
  ...MESSAGE_COLUMNS,
];

export const MESSAGE_PAGE_SIZE = 4;
