import { IProductImage } from '@mdtx/common';

export const PRODUCT_IMAGE_COLUMNS: (keyof IProductImage)[] = [
  'id',
  'name',
  'url',
];
export const PRODUCT_IMAGE_DISPLAY_COLUMNS: (keyof IProductImage)[] = [
  'id',
  'name',
  'url',
];
export const PRODUCT_IMAGE_PAGE_SIZE = 500;
