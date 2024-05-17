import { IPriceLevel } from '@mdtx/common';

export const PRICE_LEVEL_COLUMNS: (keyof IPriceLevel)[] = ['id', 'name'];
export const PRICE_LEVEL_DISPLAY_COLUMNS: (keyof IPriceLevel)[] = [
  'id',
  'name',
];
export const PRICE_LEVEL_PAGE_SIZE = 4;
