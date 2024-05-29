import axios from 'axios';
import { RestApiPathBuilder } from '@mdtx/common';
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
});
