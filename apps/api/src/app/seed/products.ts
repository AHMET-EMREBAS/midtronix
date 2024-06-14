import { ICategory, ICreateProductDto, ISupplier } from '@mdtx/models';

export const Products: ICreateProductDto[] = [
  {
    name: 'Optiplex 920',
    description: '1TB Optiplex 920 PC',
    upc: '9782345235235',
    price: 300,
    cost: 201,
    active: true,
    brand: 'Dell',
    category: { id: 1 } as ICategory,
    notes: '32GB RAM',
    quantity: 30,
    supplier: { id: 1 } as ISupplier,
    serialNumberRequired: true,
    autoGenerateSerial: false,
  },
  {
    name: 'Mac Pro',
    description: '32GB DDR4, 2TB SSD',
    upc: '876126354124',
    price: 55,
    cost: 12.99,
    active: true,
    brand: 'Apple',
    category: { id: 2 } as ICategory,
    notes: 'Other notes',
    quantity: 20,
    supplier: { id: 2 } as ISupplier,
    serialNumberRequired: true,
    autoGenerateSerial: true,
  },
];
