import { PropertyOptions as PO } from './types';
import { __StringProperty } from './string';
import { plainToInstance, validateSync } from '../__external';

describe('StringProperty', () => {
  describe('undefined value test', () => {
    it.each`
      options                                                    | value        | errorList
      ${{} as PO}                                                | ${undefined} | ${['isString']}
      ${{ minLength: 3 } as PO}                                  | ${undefined} | ${['isString', 'minLength']}
      ${{ minLength: 3, maxLength: 30 } as PO}                   | ${undefined} | ${['isString', 'minLength', 'maxLength']}
      ${{ minLength: 3, maxLength: 30, enum: ['a', 'b'] } as PO} | ${undefined} | ${['isString', 'minLength', 'maxLength', 'isIn']}
      ${{} as PO}                                                | ${null}      | ${['isString']}
      ${{ minLength: 3 } as PO}                                  | ${null}      | ${['isString', 'minLength']}
      ${{ minLength: 3, maxLength: 30 } as PO}                   | ${null}      | ${['isString', 'minLength', 'maxLength']}
      ${{ minLength: 3, maxLength: 30, enum: ['a', 'b'] } as PO} | ${null}      | ${['isString', 'minLength', 'maxLength', 'isIn']}
      ${{} as PO}                                                | ${0}         | ${['isString']}
      ${{ minLength: 3 } as PO}                                  | ${0}         | ${['isString', 'minLength']}
      ${{ minLength: 3, maxLength: 30 } as PO}                   | ${0}         | ${['isString', 'minLength', 'maxLength']}
      ${{ minLength: 3, maxLength: 30, enum: ['a', 'b'] } as PO} | ${0}         | ${['isString', 'minLength', 'maxLength', 'isIn']}
      ${{} as PO}                                                | ${{}}        | ${['isString']}
      ${{ minLength: 3 } as PO}                                  | ${{}}        | ${['isString', 'minLength']}
      ${{ minLength: 3, maxLength: 30 } as PO}                   | ${{}}        | ${['isString', 'minLength', 'maxLength']}
      ${{ minLength: 3, maxLength: 30, enum: ['a', 'b'] } as PO} | ${{}}        | ${['isString', 'minLength', 'maxLength', 'isIn']}
      ${{} as PO}                                                | ${true}      | ${['isString']}
      ${{ minLength: 3 } as PO}                                  | ${true}      | ${['isString', 'minLength']}
      ${{ minLength: 3, maxLength: 30 } as PO}                   | ${true}      | ${['isString', 'minLength', 'maxLength']}
      ${{ minLength: 3, maxLength: 30, enum: ['a', 'b'] } as PO} | ${true}      | ${['isString', 'minLength', 'maxLength', 'isIn']}
    `(
      'should validate with $options and return $errorList errors',
      ({ value, options, errorList }) => {
        class A {
          @__StringProperty({ ...options })
          name!: string;
        }
        const instance = plainToInstance(A, { name: value });

        const errors = validateSync(instance);
        console.log(errors);

        const error = errors[0];

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

  describe('string value test', () => {
    it.each`
      options                                                         | value       | errorList
      ${{ minLength: 3, maxLength: 5, enum: ['value', 'val'] } as PO} | ${'value'}  | ${[]}
      ${{ minLength: 3, maxLength: 5, enum: ['value', 'val'] } as PO} | ${'val'}    | ${[]}
      ${{ minLength: 3, maxLength: 5, enum: ['value', 'val'] } as PO} | ${'va'}     | ${['minLength', 'isIn']}
      ${{ minLength: 3, maxLength: 5, enum: ['value', 'val'] } as PO} | ${'values'} | ${['maxLength', 'isIn']}
    `(
      'should validate with $options and return $errorList errors',
      ({ value, options, errorList }) => {
        class A {
          @__StringProperty({ ...options })
          name!: string;
        }
        const instance = plainToInstance(A, { name: value });
        const errors = validateSync(instance);

        const error = errors[0];

        if (!error) {
          expect(errorList.length).toBe(0);
          return;
        }

        expect(Object.keys(error.constraints ?? {}).length).toBe(
          errorList.length
        );
        if (error.constraints)
          for (const i of errorList) expect(error.constraints[i]).toBeTruthy();
      }
    );
  });

  describe('string array value test', () => {
    it.each`
      options                                                                 | value        | errorList
      ${{ isArray: true } as PO}                                              | ${undefined} | ${['isString']}
      ${{ isArray: true, minLength: 3 } as PO}                                | ${undefined} | ${['isString', 'minLength']}
      ${{ isArray: true, minLength: 3, maxLength: 5 } as PO}                  | ${undefined} | ${['isString', 'minLength', 'maxLength']}
      ${{ isArray: true, minLength: 3, maxLength: 5, format: 'email' } as PO} | ${undefined} | ${['isString', 'minLength', 'maxLength', 'isEmail']}
      ${{ isArray: true } as PO}                                              | ${[]}        | ${[]}
    `(
      'should validate with $options and return $errorList errors',
      ({ value, options, errorList }) => {
        class A {
          @__StringProperty({ ...options })
          name!: string;
        }
        const instance = plainToInstance(A, { name: value });
        const errors = validateSync(instance);

        const error = errors[0];

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
