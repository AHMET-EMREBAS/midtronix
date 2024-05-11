import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { __DateProperty } from './date';
import { PropertyOptions as PO } from './types';

describe('DateProperty', () => {
  describe('undefined value test', () => {
    it.each`
      options     | value                                   | errorList
      ${{} as PO} | ${undefined}                            | ${['isDateString']}
      ${{} as PO} | ${new Date('01/01/1990').toISOString()} | ${[]}
    `(
      'should validate with $options and return $errorList errors',
      ({ value, options, errorList }) => {
        class A {
          @__DateProperty({ ...options })
          name!: string;
        }
        const instance = plainToInstance(A, { name: value });
        const errors = validateSync(instance);

        const error = errors[0];

        console.log(error);

        if (!error) {
          expect(errorList.length).toBe(0);
          return;
        }

        
        expect(Object.keys(error.constraints ?? {}).length).toBe(
          errorList.length
        );

        console.log(error.constraints);
        if (error.constraints)
          for (const i of errorList) expect(error.constraints[i]).toBeTruthy();
      }
    );
  });
});
