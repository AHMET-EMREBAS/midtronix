import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export function OrderProperty<T>(properties: (keyof T)[]) {
  return applyDecorators(
    ApiProperty({ type: 'string', required: false, nullable: true }),
    IsOptional(),
    Expose(),
    Transform(({ value }) => {
      console.log('OrderProperty : ');
      console.table(value);
      if (typeof value === 'string') {
        const [k, v] = value.split(':');

        if (
          properties?.map((e) => e.toString()).includes(k) &&
          (v === 'ASC' || v === 'DESC')
        ) {
          const result = { [k]: v };

          console.log('OrderProperty Result: ', result);
          console.table(result);
          return result;
        }
      }
      return undefined;
    })
  );
}
