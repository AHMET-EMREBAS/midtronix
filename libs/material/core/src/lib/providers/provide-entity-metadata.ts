import { ClientEntityMetadata } from '@mdtx/common';
import { createValueProvider } from './create-provider';
import { CollectionBaseService } from '../service';
import { Provider, Type } from '@angular/core';

export const { provide: provideEntityMetadata, token: getEntityMetadataToken } =
  createValueProvider<ClientEntityMetadata<any>>('ENTITY_METADATA');

export function provideCollectionService(
  service: Type<CollectionBaseService>
): Provider {
  return {
    provide: CollectionBaseService,
    useClass: service,
  };
}
