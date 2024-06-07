import { KeyOf } from '@mdtx/common';
import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export function OrderProperty<T>(properties: KeyOf<T>[]) {
  return applyDecorators(
    ApiProperty({ type: 'string', required: false, nullable: true }),
    IsOptional(),
    Expose(),
    Transform(({ value }) => {
      if (typeof value === 'string') {
        const [k, v] = value.split(':');

        const orderBy = k;
        const orderDir = v?.toUpperCase();

        if (
          properties?.map((e) => e.toString()).includes(orderBy) &&
          (orderDir === 'ASC' || orderDir === 'DESC')
        ) {
          const result = { [orderBy]: orderDir };

          console.log('OrderProperty Result: ', result);
          console.table(result);
          return result;
        }
      }
      return undefined;
    })
  );
}
