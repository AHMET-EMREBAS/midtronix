import { ICustomerPhoneRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_PHONE_COLUMNS: TableRow<ICustomerPhoneRaw>[] = [
  { name: 'id' },
  { name: 'username', map: (v: ICustomerPhoneRaw) => v.owner?.username },
  { name: 'phone' },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICustomerPhoneRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICustomerPhoneRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICustomerPhoneRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CUSTOMER_PHONE_DISPLAY_COLUMNS: TableRow<ICustomerPhoneRaw>[] = [
  ...CUSTOMER_PHONE_COLUMNS,
];

export const CUSTOMER_PHONE_PAGE_SIZE = 4;
