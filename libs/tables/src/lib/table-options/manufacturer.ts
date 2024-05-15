import { IManufacturer } from '@mdtx/common';

export const MANUFACTURER_COLUMNS: (keyof IManufacturer)[] = [
  'id',
  'name',
  'description',
];
export const MANUFACTURER_DISPLAY_COLUMNS: (keyof IManufacturer)[] = [
  'id',
  'name',
  'description',
];
export const MANUFACTURER_PAGE_SIZE = 500;
