import { ITicket } from '@mdtx/common';

export const TICKET_COLUMNS: (keyof ITicket)[] = [
  'id',
  'name',
  'description',
  'due',
  'startDate',
  'finishDate',
  'difficulty',
  'status',
];
export const TICKET_DISPLAY_COLUMNS: (keyof ITicket)[] = [
  'id',
  'name',
  'description',
  'due',
  'startDate',
  'finishDate',
  'difficulty',
  'status',
];
export const TICKET_PAGE_SIZE = 500;
