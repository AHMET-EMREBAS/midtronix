import { IUserAddressRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const USER_ADDRESS_COLUMNS: TableRow<IUserAddressRaw>[] = [
  { name: 'id' },
  { name: 'street' },
  { name: 'city' },
  { name: 'state' },
  { name: 'country' },
  { name: 'zip' },
  { name: 'owner', map: (v: IUserAddressRaw) => v.owner?.username },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IUserAddressRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IUserAddressRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IUserAddressRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const USER_ADDRESS_DISPLAY_COLUMNS: TableRow<IUserAddressRaw>[] = [
  ...USER_ADDRESS_COLUMNS,
];

export const USER_ADDRESS_PAGE_SIZE = 4;
