import { Product } from '@mdtx/database';
import { Repository } from 'typeorm';

const Products: Partial<Product>[] = [
  {
    name: 'IPhone 15',
    upc: '1587837456123',
  },
  {
    name: 'Samsung 70" TV',
    upc: '1234097235234',
  },
];

export async function saveProducts(repo: Repository<Product>) {
  return await repo.save(Products);
}
