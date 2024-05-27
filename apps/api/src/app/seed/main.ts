import { Customer, PriceLevel, Store, User } from '@mdtx/database';
import { Repository } from 'typeorm';

const Stores: Partial<Store>[] = [
  {
    id: 1,
    name: 'Chicago Store',
    description: 'Chicago Store',
  },
  {
    id: 2,
    name: 'Newyork Store',
    description: 'Newyork Store',
  },
  {
    id: 3,
    name: 'California Store',
    description: 'California Store',
  },
];

const Employees: Partial<User>[] = [
  {
    id: 1,
    username: 'pos@midtronix.com',
    password: 'Password123!',
  },
  {
    id: 2,
    username: 'inventory@midtronix.com',
    password: 'Password123!',
  },
  {
    id: 3,
    username: 'cms@midtronix.com',
    password: 'Password123!',
  },
];

const PriceLevels: Partial<PriceLevel>[] = [
  {
    id: 1,
    name: 'Chicago Retail 2024',
    description: 'Chicago Retail  2024',
    taxrate: 10.25,
  },
  {
    id: 2,
    name: 'Wholesale Price',
    description: 'Wholesale Price',
    taxrate: 0,
  },
  {
    id: 3,
    name: 'Chicago Retail Price',
    description: 'Chicago Retail Price',
    taxrate: 10.25,
  },
  {
    id: 4,
    name: 'New jersey Retail',
    description: 'New jersey Retail',
    taxrate: 6.63,
  },
  {
    id: 5,
    name: 'Houston Retail',
    description: 'Houston Retail',
    taxrate: 8.25,
  },
];

const Customers: Partial<Customer>[] = [
  {
    id: 1,
    username: 'walkin@midtronix.com',
    password: 'Password123!',
  },
];

async function save<T>(repo: Repository<T>, data: T[]) {
  await repo.save(data);
}

export async function saveStores(repo: Repository<Store>) {
  return await save(repo, Stores);
}

export async function savePriceLevels(repo: Repository<PriceLevel>) {
  return await save(repo, PriceLevels);
}

export async function saveEmployees(repo: Repository<User>) {
  return await save(repo, Employees);
}

export async function saveCustomers(repo: Repository<Customer>) {
  return await save(repo, Customers);
}
