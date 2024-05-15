import { ICustomer } from '@mdtx/common';

export const CUSTOMER_COLUMNS: (keyof ICustomer)[] = ['id', 'username'];
export const CUSTOMER_DISPLAY_COLUMNS: (keyof ICustomer)[] = ['id', 'username'];
export const CUSTOMER_PAGE_SIZE = 500;
