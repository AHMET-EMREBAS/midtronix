import { IPurchaseRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const PURCHASE_COLUMNS: TableRow<IPurchaseRaw>[] = [
  { name: 'id' },
  {
    name: 'name',
    map(p) {
      return p.sku.name;
    },
    label: 'Product Name',
  },
  { name: 'unitCost', label: 'Unit Cost', prefix: '$' },
  { name: 'deliveryCost', label: 'Delivery Cost', prefix: '$' },
  { name: 'confirmed' },
  {
    name: 'orderedBy',
    label: 'Ordered By',
    map(p) {
      return p.employee.username;
    },
  },
  {
    name: 'orderDate',
    label: 'Order Date',
    map(p) {
      return p.orderDate && new Date(p.orderDate).toDateString();
    },
  },
  {
    name: 'deliveryDate',
    label: 'Delivery Date',
    map(p) {
      return p.deliveryDate && new Date(p.deliveryDate).toDateString();
    },
  },

  // {
  //   name: 'createdAt',
  //   label: 'Created At',
  //   map: (v: IPurchaseRaw) =>
  //     v.createdAt && new Date(v.updatedAt).toDateString(),
  // },
  // {
  //   name: 'updatedAt',
  //   label: 'Updated At',
  //   map: (v: IPurchaseRaw) =>
  //     v.updatedAt && new Date(v.updatedAt).toDateString(),
  // },
  // {
  //   name: 'deletedAt',
  //   label: 'Deleted At',
  //   map: (v: IPurchaseRaw) =>
  //     v.deletedAt && new Date(v.deletedAt).toDateString(),
  // },
];

export const PURCHASE_DISPLAY_COLUMNS: TableRow<IPurchaseRaw>[] = [
  ...PURCHASE_COLUMNS,
];

export const PURCHASE_PAGE_SIZE = 4;
