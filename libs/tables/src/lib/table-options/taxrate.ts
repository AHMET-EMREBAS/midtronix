import { ITaxrateRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const TAXRATE_COLUMNS: TableRow<ITaxrateRaw>[] = [
  { name: 'id' },
  { name: 'state' },
  { name: 'district' },
  { name: 'rate' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ITaxrateRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ITaxrateRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ITaxrateRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const TAXRATE_DISPLAY_COLUMNS: TableRow<ITaxrateRaw>[] = [
  ...TAXRATE_COLUMNS,
];

export const TAXRATE_PAGE_SIZE = 4;
