import {
  BaseEntityMetadata,
  EntityMetadata,
  PropertyMetadata,
  __BaseEntityMetadata,
} from '@mdtx/common';
import { ISample } from './sample';

class ___SampleMetadata
  extends __BaseEntityMetadata<ISample>
  implements EntityMetadata<ISample>
{
  name(): PropertyMetadata<ISample> {
    return {
      label: 'Sample Name',
    };
  }

  override fields(): (keyof ISample)[] {
    return ['name', ...BaseEntityMetadata.fields()];
  }

  override tableColumns(): (keyof ISample)[] {
    return ['name', ...BaseEntityMetadata.tableColumns()];
  }

  override tableDisplayedColumns(): (keyof ISample)[] {
    return ['name', ...BaseEntityMetadata.tableDisplayedColumns()];
  }
}

/**
 * Provides metadata for the entity
 * Property name, label, UI preferances (form and table preferances)
 */
export const SampleMetadata = new ___SampleMetadata();
