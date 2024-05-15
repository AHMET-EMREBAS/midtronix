import { ISku } from '@mdtx/common';

export const SKU_COLUMNS: (keyof ISku)[] = ['id', 'name', 'description', 'upc'];
export const SKU_DISPLAY_COLUMNS: (keyof ISku)[] = [
  'id',
  'name',
  'description',
  'upc',
];
export const SKU_PAGE_SIZE = 500;
