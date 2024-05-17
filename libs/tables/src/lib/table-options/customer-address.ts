import { ICustomerAddress } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const CUSTOMER_ADDRESS_COLUMNS: TableRow<ICustomerAddress>[] = [
  {name:'id'},
  {,
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' }
];

export const CUSTOMER_ADDRESS_DISPLAY_COLUMNS: TableRow<ICustomerAddress>[] = [ ...CUSTOMER_ADDRESS_COLUMNS ];



export const CUSTOMER_ADDRESS_PAGE_SIZE = 4;
