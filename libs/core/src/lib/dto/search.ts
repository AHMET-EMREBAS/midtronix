import { Exclude, Transform } from 'class-transformer';
import { Property } from '../property';
import { FindOptionsWhere, ILike } from 'typeorm';

@Exclude()
export class SearchDto {
  @Property({ type: 'string' })
  search!: any;
}

export function CreateSearchDto<T = any>(searchableColumns: (keyof T)[]) {
  @Exclude()
  class SearchDto {
    @Property({ type: 'string', noValidate: true })
    @Transform(({ value }) => {
      if (typeof value === 'string' && value.length > 0 && value.length < 100) {
        return searchableColumns.map((e) => ({
          [e]: ILike(`%${value}%`),
        }));
      }
      return undefined;
    })
    search!: FindOptionsWhere<T>;
  }

  return SearchDto;
}
