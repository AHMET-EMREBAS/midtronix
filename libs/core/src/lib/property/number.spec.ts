import { PropertyOptions as PO } from './types';
import { __NumberProperty } from './number';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
describe('NumberProperty', () => {
  describe('undefined value test', () => {
    it.each`
      options                                            | value        | errorList
      ${{} as PO}                                        | ${undefined} | ${['isNumber']}
      ${{ minimum: 3 } as PO}                            | ${undefined} | ${['isNumber', 'min']}
      ${{ minimum: 3, maximum: 30 } as PO}               | ${undefined} | ${['isNumber', 'min', 'max']}
      ${{ minimum: 3, maximum: 30, enum: [1, 2] } as PO} | ${undefined} | ${['isNumber', 'min', 'max', 'isIn']}
      ${{} as PO}                                        | ${null}      | ${['isNumber']}
      ${{ minimum: 3 } as PO}                            | ${null}      | ${['isNumber', 'min']}
      ${{ minimum: 3, maximum: 30 } as PO}               | ${null}      | ${['isNumber', 'min', 'max']}
      ${{ minimum: 3, maximum: 30, enum: [1, 2] } as PO} | ${null}      | ${['isNumber', 'min', 'max', 'isIn']}
      ${{} as PO}                                        | ${'0'}       | ${['isNumber']}
      ${{ minimum: 3 } as PO}                            | ${'0'}       | ${['isNumber', 'min']}
      ${{ minimum: 3, maximum: 30 } as PO}               | ${'0'}       | ${['isNumber', 'min', 'max']}
      ${{ minimum: 3, maximum: 30, enum: [1, 2] } as PO} | ${'0'}       | ${['isNumber', 'min', 'max', 'isIn']}
      ${{} as PO}                                        | ${{}}        | ${['isNumber']}
      ${{ minimum: 3 } as PO}                            | ${{}}        | ${['isNumber', 'min']}
      ${{ minimum: 3, maximum: 30 } as PO}               | ${{}}        | ${['isNumber', 'min', 'max']}
      ${{ minimum: 3, maximum: 30, enum: [1, 2] } as PO} | ${{}}        | ${['isNumber', 'min', 'max', 'isIn']}
      ${{} as PO}                                        | ${true}      | ${['isNumber']}
      ${{ minimum: 3 } as PO}                            | ${true}      | ${['isNumber', 'min']}
      ${{ minimum: 3, maximum: 30 } as PO}               | ${true}      | ${['isNumber', 'min', 'max']}
      ${{ minimum: 3, maximum: 30, enum: [1, 2] } as PO} | ${true}      | ${['isNumber', 'min', 'max', 'isIn']}
    `(
      'should validate with $options and return $errorList errors',
      ({ value, options, errorList }) => {
        class A {
          @__NumberProperty({ ...options })
          name!: string;
        }
        const instance = plainToInstance(A, { name: value });

        const errors = validateSync(instance);
        console.log(errors);

        const error = errors[0];

        expect(error.constraints).toBeTruthy();

        expect(errorList.length).toBe(
          Object.keys(error.constraints ?? {}).length
        );

        if (error.constraints)
          for (const i of errorList) {
            expect(error.constraints[i]).toBeTruthy();
          }
      }
    );
  });

  describe('number value test', () => {
    it.each`
      options                                           | value | errorList
      ${{ minimum: 3, maximum: 5, enum: [3, 5] } as PO} | ${5}  | ${[]}
      ${{ minimum: 3, maximum: 5, enum: [3, 5] } as PO} | ${3}  | ${[]}
      ${{ minimum: 3, maximum: 5, enum: [3, 5] } as PO} | ${2}  | ${['min', 'isIn']}
      ${{ minimum: 3, maximum: 5, enum: [3, 5] } as PO} | ${6}  | ${['max', 'isIn']}
    `(
      'should validate with $options and return $errorList errors',
      ({ value, options, errorList }) => {
        class A {
          @__NumberProperty({ ...options })
          name!: string;
        }
        const instance = plainToInstance(A, { name: value });
        const errors = validateSync(instance);

        const error = errors[0];

        if (!error) {
          expect(errorList.length).toBe(0);
          return;
        }

        expect(error.constraints).toBeTruthy();
        expect(Object.keys(error.constraints ?? {}).length).toBe(
          errorList.length
        );
        if (error.constraints)
          for (const i of errorList) expect(error.constraints[i]).toBeTruthy();
      }
    );
  });

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
          @__NumberProperty({ ...options })
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
          for (const i of errorList) expect(error.constraints[i]).toBeTruthy();
      }
    );
  });
});
