import { IUserAddress } from '@mdtx/common';

export const USER_ADDRESS_COLUMNS: (keyof IUserAddress)[] = [
  'id',
  'street',
  'city',
  'state',
  'country',
  'zip',
];
export const USER_ADDRESS_DISPLAY_COLUMNS: (keyof IUserAddress)[] = [
  'id',
  'street',
  'city',
  'state',
  'country',
  'zip',
];
export const USER_ADDRESS_PAGE_SIZE = 500;
