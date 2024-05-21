import { Exclude } from 'class-transformer';
import { Property } from '../property';
import { DefaultValueTransformer, IntegerTransformer } from './transformers';

@Exclude()
export class PaginatorDto {
  @Property({ type: 'number' })
  @DefaultValueTransformer(100)
  @IntegerTransformer()
  take?: number;

  @Property({ type: 'number' })
  @DefaultValueTransformer(0)
  @IntegerTransformer()
  skip?: number;
}
