import { Exclude, Transform } from 'class-transformer';
import { Property } from '../property';
import { isArray } from 'class-validator';
import { ILike } from 'typeorm';

@Exclude()
export class QueryDto {
  @Property({ type: 'string', isArray: true })
  @Transform(({ value }) => {
    if (value) {
      if (typeof value === 'string') {
        return [value];
      } else if (isArray(value)) {
        return value;
      }
    }
    return undefined;
  })
  searchBy?: string[];

  @Property({ type: 'string' })
  @Transform(({ value, obj }) => {
    if (obj.searchBy) {
      return obj.searchBy.map((e: any) => {
        return { [e]: ILike(`%${value}%`) };
      });
    }
    return undefined;
  })
  search?: Record<string, any>;
}
