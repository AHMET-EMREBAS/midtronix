import { IProduct } from '@mdtx/common';

export const PRODUCT_COLUMNS: (keyof IProduct)[] = [
  'id',
  'name',
  'description',
  'upc',
];
export const PRODUCT_DISPLAY_COLUMNS: (keyof IProduct)[] = [
  'id',
  'name',
  'description',
  'upc',
];
export const PRODUCT_PAGE_SIZE = 500;
