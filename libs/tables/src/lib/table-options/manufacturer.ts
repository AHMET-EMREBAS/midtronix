import { IManufacturer } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const MANUFACTURER_COLUMNS: TableRow<IManufacturer>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const MANUFACTURER_DISPLAY_COLUMNS: TableRow<IManufacturer>[] = [
  ...MANUFACTURER_COLUMNS,
];

export const MANUFACTURER_PAGE_SIZE = 4;
