import { ITicket } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const TICKET_COLUMNS: TableRow<ITicket>[] = [
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
    map: (v: ITask) => v.assignees?.map((e) => e.username).join(', '),
  },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const TICKET_DISPLAY_COLUMNS: TableRow<ITicket>[] = [...TICKET_COLUMNS];

export const TICKET_PAGE_SIZE = 4;
