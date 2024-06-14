import { ICategory, ICreateProductDto, ISupplier } from '@mdtx/models';

export const Products: ICreateProductDto[] = [
  {
    name: 'Some',
    description: 'Some description',
    upc: '123462345123',
    price: 300,
    cost: 201,
    active: true,
    brand: 'Some x1',
    category: { id: 1 } as ICategory,
    notes: 'Some notes',
    quantity: 201,
    supplier: { id: 1 } as ISupplier,
    serialNumberRequired: true,
    attributes: {},
  },
  {
    name: 'Other',
    description: 'Other description',
    upc: '876126354124',
    price: 55,
    cost: 12.99,
    active: true,
    brand: 'Other x1',
    category: { id: 2 } as ICategory,
    notes: 'Other notes',
    quantity: 355,
    supplier: { id: 2 } as ISupplier,
    serialNumberRequired: true,
    attributes: {},
  },
];
