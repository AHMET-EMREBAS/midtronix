import { ICreateProductDto } from '@mdtx/common';

export const productList: ICreateProductDto[] = [
  {
    name: 'Iphone 15',
    upc: '908757264732',
    category: { id: 1 },
    department: { id: 1 },
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'Type-C USB Cable',
    upc: '34875764223',
    category: { id: 1 },
    department: { id: 1 },
    manufacturers: [{ id: 1 }],
  },
];
