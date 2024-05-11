import { Exclude } from 'class-transformer';
import { Property } from '../property';


@Exclude()
export class QueryDto {
  @Property({ type: 'string' })
  search?: Record<string, any>;
}
