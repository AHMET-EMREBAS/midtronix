import axios from 'axios';
import { RestApiPathBuilder, RestApiPaths, RestApiTokens } from '@mdtx/common';
import {
  Column,
  DataSource,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
const viewNames = ['DiscountView', 'OrderView', 'SkuView'];

const entityNames = [
  'Cart',
  'Category',
  'Customer',
  'CustomerAccount',
  'CustomerAddress',
  'CustomerEmail',
  'CustomerPermission',
  'CustomerPhone',
  'CustomerRole',
  'Department',
  'Discount',
  'Manufacturer',
  'Message',
  'Notification',
  'Order',
  'Permission',
  'Price',
  'PriceLevel',
  'Product',
  'ProductImage',
  'ProductVideo',
  'Project',
  'Purchase',
  'Quantity',
  'Role',
  'Sale',
  'Sku',
  'Sprint',
  'Store',
  'Task',
  'Taxrate',
  'Ticket',
  'User',
  'UserAddress',
  'UserEmail',
  'UserPhone',
].map((e) => {
  return RestApiPathBuilder.get(e);
});

const pluralPaths = entityNames.map((e) => e.PLURAL_PATH);
const singularIDPaths = entityNames.map((e) => e.SINGULAR_PATH + '/-1');
const singularPostPaths = entityNames.map((e) => e.SINGULAR_PATH);

const metadataPaths = entityNames.map((e) => e.METADATA_PATH);
describe('API', () => {
  describe('Smoke', () => {
    it.each(pluralPaths)(`GET /api/%s`, async (value) => {
      const res = await axios.get(`/api/${value}`);
      expect(res.status).toBe(200);
      expect(res.data).toBeTruthy();
    });
    it.each(metadataPaths)(`GET /api/%s`, async (value) => {
      const res = await axios.get(`/api/${value}`);
      expect(res.status).toBe(200);
      expect(res.data).toBeTruthy();
    });
    it.each(singularIDPaths)(`GET /api/%s`, async (value) => {
      try {
        const result = await axios.get(`/api/${value}`);
        fail(result);
      } catch (error) {
        const res = error.response;
        expect(res.status).toBe(404);
        expect(res.data).toBeTruthy();
        expect(res.data.message).toBe('Entity Not Found');
      }
    });

    it.each(singularIDPaths)(`DELETE /api/%s`, async (value) => {
      try {
        const result = await axios.delete(`/api/${value}`);
        fail(result);
      } catch (error) {
        const res = error.response;
        expect(res.status).toBe(404);
        expect(res.data).toBeTruthy();
        expect(res.data.message).toBe('Entity Not Found');
      }
    });

    it.each(singularIDPaths)(`PUT /api/%s`, async (value) => {
      try {
        const result = await axios.put(`/api/${value}`);
        fail(result);
      } catch (error) {
        const res = error.response;
        expect(res.status).toBe(404);
        expect(res.data).toBeTruthy();
        expect(res.data.message).toBe('Entity Not Found');
      }
    });

    it.each(singularPostPaths)(`POST /api/%s`, async (value) => {
      try {
        const result = await axios.post(`/api/${value}`);
        fail(result);
      } catch (error) {
        const res = error.response;
        expect(res.status).toBe(422);
        expect(res.data).toBeTruthy();
        expect(res.data.message).toBe('Invalid Input');
      }
    });
  });

  // it('relation test', async () => {
  //   @Entity()
  //   class Child {
  //     @PrimaryGeneratedColumn()
  //     id: number;
  //   }
  //   @Entity()
  //   class Parent {
  //     @PrimaryGeneratedColumn()
  //     id: number;

  //     @Column({ type: 'varchar' })
  //     name: string;

  //     @ManyToMany(() => Child, (c) => c.id, { eager: true })
  //     @JoinTable()
  //     children: Child[];
  //   }

  //   const ds = await new DataSource({
  //     type: 'better-sqlite3',
  //     database: 'tmp/database/test.sqlite',
  //     entities: [Parent, Child],
  //     synchronize: true,
  //     dropSchema: true,
  //   }).initialize();

  //   const parentRepo = ds.getRepository(Parent);
  //   const childRepo = ds.getRepository(Child);

  //   const c1 = await childRepo.save({});
  //   const c2 = await childRepo.save({});
  //   const c3 = await childRepo.save({});
  //   const p1 = await parentRepo.save({ name: 'p1', children: [{ id: 1 }] });
  //   const p2 = await parentRepo.save({ name: 'p2', children: [{ id: 2 }] });
  //   const p3 = await parentRepo.save({ name: 'p3', children: [{ id: 3 }] });

  //   expect(c1).toBeTruthy();
  //   expect(c2).toBeTruthy();
  //   expect(c3).toBeTruthy();
  //   expect(p1).toBeTruthy();
  //   expect(p2).toBeTruthy();
  //   expect(p3).toBeTruthy();

  //   console.log('P1 : ', p1);

  //   await parentRepo.save({
  //     id: p1.id,
  //     name: 'Updated',
  //     children: [{ id: 1 }, { id: 2 }, { id: 3 }],
  //   });

  //   const updatedP1 = await parentRepo.findOneBy({ id: p1.id });

  //   console.log(updatedP1);

  //   ds.destroy();
  // });
});
