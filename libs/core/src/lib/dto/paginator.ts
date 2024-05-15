import { Exclude, Transform } from 'class-transformer';
import { Property } from '../property';
import {
  BooleanTransformer,
  DefaultValueTransformer,
  IntegerTransformer,
} from './transformers';
import { ILike } from 'typeorm';
import { isArray, isString } from 'class-validator';

@Exclude()
export class PaginatorDto {
  @Property({ type: 'number' })
  @DefaultValueTransformer(20)
  @IntegerTransformer()
  take?: number;

  @Property({ type: 'number' })
  @DefaultValueTransformer(0)
  @IntegerTransformer()
  skip?: number;

  @Property({ type: 'string', isArray: true, noValidate: true })
  @Transform(({ value }) => {
    if (isArray(value)) {
      return value;
    } else if (isString(value)) {
      return [value];
    }
    return undefined;
  })
  select?: string[];

  @Property({ type: 'boolean', noValidate: true })
  @DefaultValueTransformer(false)
  @BooleanTransformer()
  withDeleted?: boolean;

  @Property({ type: 'string', noValidate: true })
  @Transform(({ value }) => {
    if (value && value.length > 0 && value.length < 50) {
      return ILike(`%${value}%`);
    }
    return undefined;
  })
  search?: string;
}
