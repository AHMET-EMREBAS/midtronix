import { IMessageRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const MESSAGE_COLUMNS: TableRow<IMessageRaw>[] = [
  { name: 'id' },
  { name: 'message' },
  {
    name: 'source',
    label: 'From',
    map: (v: IMessageRaw) => v.source?.username,
  },
  { name: 'target', label: 'To', map: (v: IMessageRaw) => v.target?.username },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IMessageRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IMessageRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IMessageRaw) =>
      v.createdAt && new Date(v.deletedAt).toDateString(),
  },
];

export const MESSAGE_DISPLAY_COLUMNS: TableRow<IMessageRaw>[] = [
  ...MESSAGE_COLUMNS,
];

export const MESSAGE_PAGE_SIZE = 4;
