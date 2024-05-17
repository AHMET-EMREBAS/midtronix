import { IProductVideoRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PRODUCT_VIDEO_COLUMNS: TableRow<IProductVideoRaw>[] = [
  { name: 'id' },
  { name: 'name' },
  { name: 'url' },
  { name: 'product', map: (v: IProductVideoRaw) => v.owner.name },
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' },
];

export const PRODUCT_VIDEO_DISPLAY_COLUMNS: TableRow<IProductVideoRaw>[] = [
  ...PRODUCT_VIDEO_COLUMNS,
];

export const PRODUCT_VIDEO_PAGE_SIZE = 4;
