import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { __DateProperty } from './date';
import { PropertyOptions as PO } from './types';

describe('Description', () => {
  describe('undefined value test', () => {
    describe('number array value test', () => {
      it.each`
        options                                            | value        | errorList
        ${{ isArray: true } as PO}                         | ${undefined} | ${['isNumber']}
        ${{ isArray: true, minimum: 3 } as PO}             | ${undefined} | ${['isNumber', 'min']}
        ${{ isArray: true, minimum: 3, maximum: 5 } as PO} | ${undefined} | ${['isNumber', 'min', 'max']}
        ${{ isArray: true } as PO}                         | ${[]}        | ${[]}
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

          expect(error.constraints).toBeTruthy();
          expect(Object.keys(error.constraints ?? {}).length).toBe(
            errorList.length
          );

          console.log(error.constraints);
          if (error.constraints)
            for (const i of errorList)
              expect(error.constraints[i]).toBeTruthy();
        }
      );
    });
  });
});
