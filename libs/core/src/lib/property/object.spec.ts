import { __StringProperty } from './string';
import { __ObjectProperty } from './object';
import { PropertyOptions as PO } from './types';
import { plainToInstance, validateSync } from '../__external';

class B {
  @__StringProperty()
  name?: string;
}

describe('ObjectProperty', () => {
  describe('object value test', () => {
    it.each`
      options                    | value           | errorList | childErrorList
      ${{ objectType: B } as PO} | ${{}}           | ${[]}     | ${['isString']}
      ${{ objectType: B } as PO} | ${{ name: '' }} | ${[]}     | ${[]}
    `(
      'should validate with $options and return $errorList errors',
      ({ value, options, errorList, childErrorList }) => {
        class A {
          @__ObjectProperty({ ...options })
          name?: B;
        }

        const instance = plainToInstance(A, { name: value });
        const errors = validateSync(instance);

        const error = errors[0];

        if (!error) {
          expect(errorList.length).toBe(0);
        } else {
          expect(Object.keys(error.constraints ?? {}).length).toBe(
            errorList.length
          );
          if (error.constraints)
            for (const i of errorList)
              expect(error.constraints[i]).toBeTruthy();
        }

        if (error) {
          const childError = error.children?.[0];

          if (!childError) {
            expect(childErrorList.length).toBe(0);
          } else {
            expect(Object.keys(childError.constraints ?? {}).length).toBe(
              childErrorList.length
            );

            if (childError.constraints)
              for (const i of childErrorList)
                expect(childError.constraints[i]).toBeTruthy();
          }
        }

        // eof
      }
    );
  });
});
