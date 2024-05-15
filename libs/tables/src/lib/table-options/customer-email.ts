import { ICustomerEmail } from '@mdtx/common';

export const CUSTOMER_EMAIL_COLUMNS: (keyof ICustomerEmail)[] = [`id`, `email`];
export const CUSTOMER_EMAIL_DISPLAY_COLUMNS: (keyof ICustomerEmail)[] = [
  `id`,
  `email`,
];
export const CUSTOMER_EMAIL_PAGE_SIZE = 500;
