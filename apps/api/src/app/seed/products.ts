import { ICreateProductDto } from '@mdtx/common';
import { Product } from '@mdtx/database';
import { Repository } from 'typeorm';

const Products: Partial<ICreateProductDto>[] = [
  {
    name: 'IPhone 15',
    upc: '1587837456123',
    manufacturers: [{ id: 1 }],
  },
  {
    name: 'Samsung 70" TV',
    upc: '1234097235234',
    manufacturers: [{ id: 1 }],
  },
];

export async function saveProducts(repo: Repository<Product>) {
  return await repo.save(Products);
}
