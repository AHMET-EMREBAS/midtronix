import { validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { CreatePermissionDto } from './permission.dto';

describe('PermissionDto', () => {
  describe('Create', () => {
    it('should validate', () => {
      const value = plainToInstance(CreatePermissionDto, {
        name: '',
        some: '',
      });
      const errors = validateSync(value);
      expect((value as any)['some']).toBeUndefined();
      const nameErrors = errors.find((e) => e.property === 'name');

      expect(nameErrors).toBeTruthy();

      if (nameErrors) {
        expect(nameErrors?.constraints).toHaveProperty('isNotEmpty');
        expect(nameErrors?.constraints).toHaveProperty('isLength');
        expect(nameErrors?.constraints).toHaveProperty('isString');
      }
    });
  });
  describe('Update', () => {
    it('should validate', () => {
      const value = plainToInstance(CreatePermissionDto, {
        name: '',
        some: '',
      });
      const errors = validateSync(value);
      expect((value as any)['some']).toBeUndefined();
      const nameErrors = errors.find((e) => e.property === 'name');

      expect(nameErrors).toBeTruthy();

      if (nameErrors) {
        expect(nameErrors?.constraints).toHaveProperty('isNotEmpty');
        expect(nameErrors?.constraints).toHaveProperty('isLength');
        expect(nameErrors?.constraints).toHaveProperty('isString');
      }
    });
  });

  describe('Query', () => {
    it('should validate', () => {
      const value = plainToInstance(CreatePermissionDto, {
        name: '',
        some: '',
      });
      const errors = validateSync(value);
      expect((value as any)['some']).toBeUndefined();
      const nameErrors = errors.find((e) => e.property === 'name');

      expect(nameErrors).toBeTruthy();

      if (nameErrors) {
        expect(nameErrors?.constraints).toHaveProperty('isNotEmpty');
        expect(nameErrors?.constraints).toHaveProperty('isLength');
        expect(nameErrors?.constraints).toHaveProperty('isString');
      }
    });
  });
  describe('Search', () => {
    it('should validate', () => {
      const value = plainToInstance(CreatePermissionDto, {
        name: '',
        some: '',
      });
      const errors = validateSync(value);
      expect((value as any)['some']).toBeUndefined();
      const nameErrors = errors.find((e) => e.property === 'name');

      expect(nameErrors).toBeTruthy();

      if (nameErrors) {
        expect(nameErrors?.constraints).toHaveProperty('isNotEmpty');
        expect(nameErrors?.constraints).toHaveProperty('isLength');
        expect(nameErrors?.constraints).toHaveProperty('isString');
      }
    });
  });
});
