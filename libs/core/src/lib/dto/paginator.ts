import { Exclude, Transform } from 'class-transformer';
import { Property } from '../property';

@Exclude()
export class PaginatorDto<TOrder = Record<any, any>> {
  @Property({ type: 'number' }) take?: number;

  @Property({ type: 'number' }) skip?: number;

  @Property({ type: 'string' })
  @Transform(({ value }) => {
    if (value && typeof value === 'string' && value.includes(':')) {
      const [prop, dir] = value.split(':');

      if (prop && dir) return { [prop]: dir };
    }
    return undefined;
  })
  order?: TOrder;
}
