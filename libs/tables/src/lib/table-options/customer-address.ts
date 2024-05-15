import { ICustomerAddress } from '@mdtx/common';

export const CUSTOMER_ADDRESS_COLUMNS: (keyof ICustomerAddress)[] = [
  'id',
  'street',
  'city',
  'state',
  'country',
  'zip',
];
export const CUSTOMER_ADDRESS_DISPLAY_COLUMNS: (keyof ICustomerAddress)[] = [
  'id',
  'street',
  'city',
  'state',
  'country',
  'zip',
];
export const CUSTOMER_ADDRESS_PAGE_SIZE = 500;
