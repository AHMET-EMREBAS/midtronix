import { EntityMetadata } from '@mdtx/common';
import {
  CollectionBaseService,
  createClassProvider,
  createValueProvider,
} from '@mdtx/material/core';

export const {
  provide: provideAdvanceTableMetadata,
  token: getAdvanceTableMetadataToken,
} = createValueProvider<EntityMetadata<unknown>>('ADVANCE_TABLE_METADATA');

export const {
  provide: provideAdvanceTableCollectionService,
  token: getAdvanceTableCollectionServiceToken,
} = createClassProvider<CollectionBaseService>(
  'ADVANCE_TABLE_COLLECTION_SERVICE'
);
