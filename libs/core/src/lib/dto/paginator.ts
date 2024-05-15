import { Exclude, Transform } from 'class-transformer';
import { Property } from '../property';
import {
  BooleanTransformer,
  DefaultValueTransformer,
  IntegerTransformer,
} from './transformers';
import { isAlpha } from 'class-validator';
import { ILike } from 'typeorm';

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
