import { ICustomerPhoneRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_PHONE_COLUMNS: TableRow<ICustomerPhoneRaw>[] = [
  { name: 'id' },
  { name: 'phone' },
  { name: 'owner', map: (v: ICustomerPhoneRaw) => v.owner?.username },
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
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICustomerPhoneRaw) =>
      v.createdAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CUSTOMER_PHONE_DISPLAY_COLUMNS: TableRow<ICustomerPhoneRaw>[] = [
  ...CUSTOMER_PHONE_COLUMNS,
];

export const CUSTOMER_PHONE_PAGE_SIZE = 4;
