import { IUserPhoneRaw } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const USER_PHONE_COLUMNS: TableRow<IUserPhoneRaw>[] = [
  { name: 'id' },
  { name: 'phone' },
  { name: 'owner', map: (v: IUserPhoneRaw) => v.owner?.username },
  {
    name: 'createdAt',
    label: 'Created At',
    map: (v: IUserPhoneRaw) =>
      v.createdAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'updatedAt',
    label: 'Updated At',
    map: (v: IUserPhoneRaw) =>
      v.updatedAt && new Date(v.updatedAt).toDateString(),
  },
  {
    name: 'deletedAt',
    label: 'Deleted At',
    map: (v: IUserPhoneRaw) =>
      v.deletedAt && new Date(v.deletedAt).toDateString(),
  },
];

export const USER_PHONE_DISPLAY_COLUMNS: TableRow<IUserPhoneRaw>[] = [
  ...USER_PHONE_COLUMNS,
];

export const USER_PHONE_PAGE_SIZE = 4;
