import { Exclude, Transform } from 'class-transformer';
import { Property } from '../property';

export class SortDto {
  @Property({ type: 'string' })
  orderBy!: string;

  @Property({ type: 'string' })
  orderDir!: string;
}

export function CreateSortDto<T>(sortColumns: (keyof T)[]) {
  @Exclude()
  class __SortDto extends SortDto {
    @Property({ type: 'string', noValidate: true })
    @Transform(({ obj, value }) => {
      if (typeof value === 'string') {
        const [orderBy, orderDir] = value.split(':');
        if (orderBy && orderDir) {
          obj.orderBy = orderBy;
          obj.orderDir = orderDir;
        }
      }
      return undefined;
    })
    order!: string;
    @Property({ type: 'string', enum: [...sortColumns] })
    override orderBy!: string;

    @Property({ type: 'string', enum: ['ASC', 'DESC', 'asc', 'desc'] })
    override orderDir!: string;
  }

  return __SortDto;
}
