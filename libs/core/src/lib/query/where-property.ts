import { Type, applyDecorators } from '@nestjs/common';
import { Transform, instanceToInstance } from 'class-transformer';
import { Property } from './../property';

export function WhereProperty(dto: Type) {
  return applyDecorators(
    Property({ type: 'object', target: dto }),
    Transform(({ obj }) => {
      if (obj) {
        const result = instanceToInstance(new dto(obj), {
          exposeUnsetFields: false,
          excludeExtraneousValues: true,
        });

        if (Object.keys(result).length > 0) {
          return result;
        } 
      }
      return undefined;
    })
  );
}
