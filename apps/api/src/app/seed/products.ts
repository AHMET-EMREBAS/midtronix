import { Product } from '@mdtx/database';
import { Repository } from 'typeorm';

const Products: Partial<Product>[] = [
  {
    name: 'None',
    upc: '9999999999999',
  },
];

export async function saveProducts(repo: Repository<Product>) {
  return await repo.save(Products);
}
