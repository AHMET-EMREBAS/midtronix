import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
} from '@mdtx/common';
import { ISample } from './sample';

class ___SampleMetadata
  extends BaseEntityMetadata<ISample>
  implements EntityMetadata<ISample>
{
  name(): PropertyMetadata<ISample> {
    return {
      label: 'Sample Name',
    };
  }

  override fields(): (keyof ISample)[] {
    return ['name', ...super.fields()];
  }

  override tableColumns(): PropertyMetadata<ISample>[] {
    return [this.name(), ...super.tableColumns()];
  }

  override tableDisplayedColumns(): PropertyMetadata<ISample>[] {
    return [this.name(), ...super.tableDisplayedColumns()];
  }
}

/**
 * Provides metadata for the entity
 * Property name, label, UI preferances (form and table preferances)
 */
export const SampleMetadata = new ___SampleMetadata();
