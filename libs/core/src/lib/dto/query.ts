import { Exclude, Transform } from 'class-transformer';
import { Property } from '../property';
import { IsIn, IsNotIn, isArray } from 'class-validator';
import { ILike } from 'typeorm';

@Exclude()
export class QueryDto {
  @Property({ type: 'string', isArray: true })
  @IsNotIn(['createdAt', 'updatedAt', 'deletedAt', 'id'])
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
    let { searchBy } = obj;
    if (searchBy) {
      if (isArray(searchBy)) {
        //
      } else if (typeof searchBy === 'string') {
        searchBy = [searchBy];
      } else {
        searchBy = undefined;
      }
    }
    if (searchBy) {
      return searchBy.map((e: any) => {
        return { [e]: ILike(`%${value}%`) };
      });
    }
    return undefined;
  })
  search?: Record<string, any>;
}
