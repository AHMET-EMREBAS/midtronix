import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsOptional, isArray } from 'class-validator';
import { ILike } from 'typeorm';

/**
 * Transform search string into FindOptionsWhere (Query operators)
 * @param searchables
 * @returns
 */
export function SearchProperty<T>(searchables: (keyof T)[]) {
  return applyDecorators(
    ApiProperty({ type: 'string', required: false, nullable: true }),
    IsOptional(),
    Expose(),
    Transform(({ value }) => {
      if (typeof value === 'string') {
        const search = value.trim().toLowerCase();

        if (search.length > 0) {
          // Or Search
          return searchables.map((e) => {
            return { [e]: ILike(`%${search}%`) };
          });
        }
        return undefined;
      } else if (isArray(value)) {
        const search = value as string[];

        //  Multiple Or Search
        return searchables
          .map((e) => {
            return search
              .filter((searchValue) => typeof searchValue === 'string')
              .map((searchValue) => searchValue.trim().toLowerCase())
              .filter((searchValue) => searchValue.length > 0)
              .map((searchValue) => {
                return { [e]: ILike(`%${searchValue}%`) };
              });
          })
          .flat();
      }

      return undefined;
    })
  );
}
