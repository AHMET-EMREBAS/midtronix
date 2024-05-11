import { Exclude } from 'class-transformer';
import { Property } from '../property';
@Exclude()
export class PaginatorDto {
  @Property({ type: 'number' })
  take?: number;

  @Property({ type: 'number' })
  skip?: number;

  @Property({ type: 'query-object' })
  order?: Record<string, 'asc' | 'desc' | 'ASC' | 'DESC'>;

  @Property({ type: 'boolean' })
  withDeleted?: boolean;
}
