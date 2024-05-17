import { ITicketRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const TICKET_COLUMNS: TableRow<ITicketRaw>[] = [
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
    map: (v: ITicketRaw) => v.assignees?.map((e) => e.username).join(', '),
  },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ITicketRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ITicketRaw) => v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ITicketRaw) => v.createdAt && new Date(v.deletedAt).toDateString(),
  },
];

export const TICKET_DISPLAY_COLUMNS: TableRow<ITicketRaw>[] = [
  ...TICKET_COLUMNS,
];

export const TICKET_PAGE_SIZE = 4;
