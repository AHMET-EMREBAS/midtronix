import { Inject, Provider, Type } from '@nestjs/common';
import { BaseEntityService } from './entity.service';

export function entityServiceToken(entity: Type) {
  return `${entity.name}_SERVICE`.toUpperCase();
}
export function provideEntityService(
  entity: Type,
  useClass: Type<BaseEntityService>
): Provider {
  return {
    provide: entityServiceToken(entity),
    useClass,
  };
}

export function InjectEntityService(entity: Type) {
  return Inject(entityServiceToken(entity));
}
