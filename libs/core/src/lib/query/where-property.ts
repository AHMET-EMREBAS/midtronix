import { Type, applyDecorators } from '@nestjs/common';
import { Transform, instanceToInstance } from 'class-transformer';
import { Property } from './../property';

export function WhereProperty(dto: Type) {
  return applyDecorators(
    Property({ type: 'object', target: dto }),
    Transform(({ obj }) => {
      if (obj) {
        return instanceToInstance(new dto(obj), {
          exposeUnsetFields: false,
          excludeExtraneousValues: true,
        });
      }
      return undefined;
    })
  );
}
