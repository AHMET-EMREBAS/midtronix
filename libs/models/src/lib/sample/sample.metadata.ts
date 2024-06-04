import {
  BaseEntityMetadata,
  EntityMetadata,
  PropertyMetadata,
} from '@mdtx/common';
import { ISample } from './sample';

class ___SampleMetadata implements EntityMetadata<ISample> {
  name(): PropertyMetadata<ISample> {
    return {
      label: 'Sample Name',
    };
  }

  fields(): (keyof ISample)[] {
    return ['name', ...BaseEntityMetadata.fields()];
  }

  tableColumns(): (keyof ISample)[] {
    return ['name', ...BaseEntityMetadata.tableColumns()];
  }

  tableDisplayedColumns(): (keyof ISample)[] {
    return ['name', ...BaseEntityMetadata.tableDisplayedColumns()];
  }
}

/**
 * Provides metadata for the entity
 * Property name, label, UI preferances (form and table preferances)
 */
export const SampleMetadata = new ___SampleMetadata();
