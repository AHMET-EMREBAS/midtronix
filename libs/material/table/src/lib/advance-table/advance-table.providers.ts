import { EntityMetadata } from '@mdtx/common';
import { createClassProvider } from '@mdtx/material/core';

export const {
  provide: provideAdvanceTableMetadata,
  token: getAdvanceTableMetadataToken,
} = createClassProvider<EntityMetadata<any>>('ADVANCE_TABLE_METADATA');
