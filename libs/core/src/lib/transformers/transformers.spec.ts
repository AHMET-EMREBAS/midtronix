import { plainToInstance } from 'class-transformer';
import {
  BooleanTransformer,
  DateTransformer,
  IntegerTransformer,
  NumberTransformer,
  StringTransformer,
} from './transformers';

describe('Transformers', () => {
  describe('StringTransformer', () => {
    class A {
      @StringTransformer
      value!: string;
    }
    it('should transform empty string to undefiend', () => {
      const result = plainToInstance(A, { value: '' });
      expect(result.value).toBeUndefined();
    });
  });

  describe('NumberTransformer', () => {
    class A {
      @NumberTransformer
      value!: number;
    }
    const result = plainToInstance(A, { value: '1.22' });
    expect(result.value).toBe(1.22);
  });

  describe('IntegerTransformer', () => {
    class A {
      @IntegerTransformer
      value!: number;
    }
    const result = plainToInstance(A, { value: '1.23' });
    expect(result.value).toBe(1);
  });

  describe('BooleanTransformer', () => {
    class A {
      @BooleanTransformer
      value!: boolean;
    }
    const result = plainToInstance(A, { value: 'true' });
    expect(result.value).toBe(true);
  });

  describe('DateTransformer', () => {
    class A {
      @DateTransformer
      value!: Date;
    }
    const result = plainToInstance(A, { value: '01/10/1990 13:30' });
    expect(result.value.getTime()).toBeDefined();
  });
});
