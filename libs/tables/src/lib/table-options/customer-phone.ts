import { ICustomerPhone } from '@mdtx/common';

export const CUSTOMER_PHONE_COLUMNS: (keyof ICustomerPhone)[] = ['id', 'phone'];
export const CUSTOMER_PHONE_DISPLAY_COLUMNS: (keyof ICustomerPhone)[] = [
  'id',
  'phone',
];
export const CUSTOMER_PHONE_PAGE_SIZE = 500;
