import axios from 'axios';
import { RestApiPathBuilder } from '@mdtx/utils';

const entityNames = ['Sample'].map((e) => {
  return RestApiPathBuilder.get(e);
});

const pluralPaths = entityNames.map((e) => e.PLURAL_PATH);
const singularIDPaths = entityNames.map((e) => e.SINGULAR_PATH + '/-1');
const singularPostPaths = entityNames.map((e) => e.SINGULAR_PATH);

const metadataPaths = entityNames.map((e) => e.METADATA_PATH);

function rpath(resourcePath: string) {
  return `api/v1/${resourcePath}`;
}

describe('API', () => {
  describe('Smoke', () => {
    it.each(pluralPaths)(`GET /api/v1/%s`, async (value) => {
      const res = await axios.get(rpath(value));
      expect(res.status).toBe(200);
      expect(res.data).toBeTruthy();
    });
    it.each(metadataPaths)(`GET /api/v1/%s`, async (value) => {
      const res = await axios.get(rpath(value));
      expect(res.status).toBe(200);
      expect(res.data).toBeTruthy();
    });
    
    it.each(singularIDPaths)(`GET /api/v1/%s`, async (value) => {
      try {
        const result = await axios.get(rpath(value));
        fail(result);
      } catch (error) {
        const res = error.response;
        expect(res.status).toBe(404);
        expect(res.data).toBeTruthy();
        expect(res.data.message).toBe('Entity Not Found');
      }
    });

    it.each(singularIDPaths)(`DELETE /api/v1/%s`, async (value) => {
      try {
        const result = await axios.delete(rpath(value));
        fail(result);
      } catch (error) {
        const res = error.response;
        expect(res.status).toBe(404);
        expect(res.data).toBeTruthy();
        expect(res.data.message).toBe('Entity Not Found');
      }
    });

    it.each(singularIDPaths)(`PUT /api/v1/%s`, async (value) => {
      try {
        const result = await axios.put(rpath(value));
        fail(result);
      } catch (error) {
        const res = error.response;
        expect(res.status).toBe(404);
        expect(res.data).toBeTruthy();
        expect(res.data.message).toBe('Entity Not Found');
      }
    });

    it.each(singularPostPaths)(`POST /api/v1/%s`, async (value) => {
      try {
        const result = await axios.post(rpath(value));
        fail(result);
      } catch (error) {
        const res = error.response;
        expect(res.status).toBe(422);
        expect(res.data).toBeTruthy();
        expect(res.data.message).toBe('Input Validation Error');
      }
    });
  });
});
