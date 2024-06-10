import { validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { CreateDepartmentDto } from './department.dto';

describe('DepartmentDto', () => {
  describe('Create', () => {
    it('should validate', () => {
      const value = plainToInstance(CreateDepartmentDto, {
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
      const value = plainToInstance(CreateDepartmentDto, {
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
      const value = plainToInstance(CreateDepartmentDto, {
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
      const value = plainToInstance(CreateDepartmentDto, {
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
