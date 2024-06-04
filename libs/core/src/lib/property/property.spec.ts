import { Exclude, plainToInstance } from 'class-transformer';
import { Property } from './property';
import { validateSync } from 'class-validator';

describe('Property ', () => {
  describe('String', () => {
    it.each`
      value         | type        | minLength | maxLength | errors
      ${undefined}  | ${'string'} | ${2}      | ${4}      | ${[]}
      ${'s'}        | ${'string'} | ${2}      | ${4}      | ${['minLength']}
      ${'somes'}    | ${'string'} | ${2}      | ${4}      | ${['maxLength']}
      ${'som'}      | ${'string'} | ${2}      | ${4}      | ${[]}
      ${1}          | ${'string'} | ${2}      | ${4}      | ${['isString']}
      ${new Date()} | ${'string'} | ${2}      | ${4}      | ${['isString']}
      ${true}       | ${'string'} | ${2}      | ${4}      | ${['isString']}
    `(
      '$value should be between $minLength and $maxLength : $errors',
      ({ value, type, minLength, maxLength, errors }) => {
        @Exclude()
        class Sample {
          @Property({ type, minLength, maxLength })
          value?: string;
        }

        const foundErrors = validateSync(
          plainToInstance(Sample, { value: value })
        );

        expect(foundErrors.length).toBe(errors.length);

        for (const error of errors) {
          expect(
            foundErrors.find((e) => {
              return Object.keys(e.constraints || {}).find((k) => k == error);
            })
          ).toBeTruthy();
        }
      }
    );
  });

  describe('Number', () => {
    it.each`
      value  | type        | minimum | maximum | errors
      ${1}   | ${'number'} | ${2}    | ${4}    | ${['min']}
      ${'1'} | ${'number'} | ${2}    | ${4}    | ${['min']}
      ${5}   | ${'number'} | ${2}    | ${4}    | ${['max']}
      ${'5'} | ${'number'} | ${2}    | ${4}    | ${['max']}
      ${'4'} | ${'number'} | ${2}    | ${4}    | ${[]}
      ${0}   | ${'number'} | ${0}    | ${4}    | ${[]}
    `(
      '$value should be between $minimum and $maximum : $errors',
      ({ value, type, minimum, maximum, errors }) => {
        @Exclude()
        class Sample {
          @Property({ type, minimum, maximum })
          value?: number;
        }

        const foundErrors = validateSync(
          plainToInstance(Sample, { value: value })
        );

        expect(foundErrors.length).toBe(errors.length);

        for (const error of errors) {
          expect(
            foundErrors.find((e) => {
              return Object.keys(e.constraints || {}).find((k) => k == error);
            })
          ).toBeTruthy();
        }
      }
    );
  });
});
