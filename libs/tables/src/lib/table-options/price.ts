import { IPrice } from '@mdtx/common';

export const PRICE_COLUMNS: (keyof IPrice)[] = ['id', 'price', 'cost'];
export const PRICE_DISPLAY_COLUMNS: (keyof IPrice)[] = ['id', 'price', 'cost'];
export const PRICE_PAGE_SIZE = 4;
