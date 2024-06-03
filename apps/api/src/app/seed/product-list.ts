import { ICreateProductDto } from '@mdtx/common';

export const productList: ICreateProductDto[] = [
  {
    name: 'Logitech Mouse',
    upc: '908757264732',
    category: { id: 2 },
    department: { id: 2 },
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'Type C USB Cable',
    upc: '34875764223',
    category: { id: 3 },
    department: { id: 3 },
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'Flash Drive',
    upc: '435623454567',
    category: { id: 4 },
    department: { id: 4 },
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'DVD 800',
    upc: '56756782345',
    category: { id: 5 },
    department: { id: 5 },
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'DVD 600',
    upc: '976546543434',
    category: { id: 3 },
    department: { id: 3 },
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'Dell 24" Full HD Monitor',
    upc: '89672345978',
    category: { id: 6 },
    department: { id: 6 },
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'Dell 32" Full HD Monitor',
    upc: '45685673456',
    category: { id: 6 },
    department: { id: 6 },
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'Optiplex i7 4GHZ',
    upc: '2345743575345',
    category: { id: 4 },
    department: { id: 4 },
    manufacturers: [{ id: 1 }],
  },
];
