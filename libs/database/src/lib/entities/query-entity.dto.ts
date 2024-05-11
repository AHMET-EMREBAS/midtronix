import { Property, Transform, isNotEmpty, isString, ILike } from '@mdtx/core';

export function QueryEntityDto<T>(keys: (keyof T)[]) {
  class QueryEntity {
    @Property({ type: 'string', noValidate: true })
    @Transform(({ value }) => {
      if (isString(value) && isNotEmpty(value)) {
        return keys.map((e) => {
          return { [e]: ILike(`%${value}%`) };
        });
      }

      return undefined;
    })
    search?: string;
  }

  return QueryEntity;
}
