import { IManufacturerRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const MANUFACTURER_COLUMNS: TableRow<IManufacturerRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'description' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IManufacturerRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IManufacturerRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IManufacturerRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const MANUFACTURER_DISPLAY_COLUMNS: TableRow<IManufacturerRaw>[] = [
  ...MANUFACTURER_COLUMNS,
];

export const MANUFACTURER_PAGE_SIZE = 4;
