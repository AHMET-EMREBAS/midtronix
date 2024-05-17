import { ICustomerAddressRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_ADDRESS_COLUMNS: TableRow<ICustomerAddressRaw>[] = [
  { name: 'id' },
  { name: 'street' },
  { name: 'city' },
  { name: 'state' },
  { name: 'country' },
  { name: 'zip' },
  { name: 'owner', map: (v: ICustomerAddressRaw) => v.owner?.username },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: ICustomerAddressRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: ICustomerAddressRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: ICustomerAddressRaw) =>
      v.createdAt && new Date(v.deletedAt).toDateString(),
  },
];

export const CUSTOMER_ADDRESS_DISPLAY_COLUMNS: TableRow<ICustomerAddressRaw>[] =
  [...CUSTOMER_ADDRESS_COLUMNS];

export const CUSTOMER_ADDRESS_PAGE_SIZE = 4;
