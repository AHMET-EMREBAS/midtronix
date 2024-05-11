import { Exclude } from 'class-transformer';
import { Property } from '../property';
import {
  BooleanTransformer,
  DefaultValueTransformer,
  IntegerTransformer,
  ObjectTransformer,
} from './transformers';

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

  @Property({ type: 'object' })
  @DefaultValueTransformer({ id: 'asc' })
  @ObjectTransformer()
  order?: Record<string, 'asc' | 'desc' | 'ASC' | 'DESC'>;

  @Property({ type: 'boolean' })
  @DefaultValueTransformer(false)
  @BooleanTransformer()
  withDeleted?: boolean;
}
