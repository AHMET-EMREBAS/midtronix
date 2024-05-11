/* eslint-disable @nx/enforce-module-boundaries */
import { DataSource } from '@mdtx/core';
import { PriceLevel, Product } from './product';
import * as faker from 'faker';
import { testDB } from './__test';
import { Manufacturer } from './manufacturer';
import { Category, Department } from './meta';
import { Store } from './store';
import { Project, Sprint, Task } from './project';
import { Permission, Role, User } from './user';
import { Message } from './message';
import { Customer, CustomerPermission, CustomerRole } from './customer';

function productLike(): Partial<Product> {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    upc: faker.datatype.string(13),
  };
}

function nameLike(): Partial<Category> {
  return {
    name: faker.commerce.productName(),
  };
}
function messgeLike(): Partial<Message> {
  return {
    message: faker.commerce.productName(),
  };
}

function userLike(): Partial<User> {
  return {
    username: 'username@gmail.com',
    password: 'password',
  };
}

describe('Product Test', () => {
  let ds: DataSource;

  beforeEach(async () => {
    ds = await testDB([
      Product,
      Category,
      Department,
      Manufacturer,
      Store,
      PriceLevel,
      Project,
      Sprint,
      Task,
      User,
      Role,
      Permission,
      Customer,
      CustomerRole,
      CustomerPermission,
      Message,
    ]);
  });
  it.each`
    name                       | data             | cls
    ${Product.name}            | ${productLike()} | ${Product}
    ${Category.name}           | ${nameLike()}    | ${Category}
    ${Department.name}         | ${nameLike()}    | ${Department}
    ${Store.name}              | ${nameLike()}    | ${Store}
    ${PriceLevel.name}         | ${nameLike()}    | ${PriceLevel}
    ${Project.name}            | ${nameLike()}    | ${Project}
    ${Sprint.name}             | ${nameLike()}    | ${Sprint}
    ${Task.name}               | ${nameLike()}    | ${Task}
    ${User.name}               | ${userLike()}    | ${User}
    ${Role.name}               | ${nameLike()}    | ${Role}
    ${Permission.name}         | ${nameLike()}    | ${Permission}
    ${Customer.name}           | ${userLike()}    | ${Customer}
    ${CustomerRole.name}       | ${nameLike()}    | ${CustomerRole}
    ${CustomerPermission.name} | ${nameLike()}    | ${CustomerPermission}
    ${Message.name}            | ${messgeLike()}  | ${Message}
  `('should save $name with $data', async ({ data, cls }) => {
    const repo = ds.getRepository(cls);
    const saved = await repo.save(data);
    expect(saved).not.toBeUndefined();
  });

  afterAll(async () => {
    await ds.destroy();
  });
});
