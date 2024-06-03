import { Transform } from 'class-transformer';
import { ILike } from 'typeorm';

export function SearchTransformer<T>(searchFields: (keyof T)[]) {
  return Transform(({ value }) => {
    if (typeof value === 'string' && value.length > 0 && value.length < 100) {
      return searchFields.map((e) => ({
        [e]: ILike(`%${value}%`),
      }));
    }
    return undefined;
  });
}
