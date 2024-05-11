import { PropertyOptions as PO } from './types';
import { StringProperty } from './string';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
describe('String Property', () => {
  describe('string', () => {
    it.each`
      options     | value        | errorCount
      ${{} as PO} | ${undefined} | ${0}
    `(
      'should sanitize the $value with $options and return $errorCount errors',
      ({ value, options, errorCount }) => {
        class A {
          @StringProperty({ ...options })
          name!: string;
        }
        const instance = plainToInstance(A, { name: value });

        const errors = validateSync(instance);

        expect(errors.length).toBe(errorCount);
      }
    );
  });
});
