import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  TableFields,
  KeyOf,
} from '@mdtx/common';
import { ISampleView } from './sample-view';

export class SampleViewMetadata
  extends BaseViewMetadata<ISampleView>
  implements EntityMetadata<ISampleView>
{
  sampleId(): PropertyMetadata<ISampleView> {
    return { name: 'sampleId', label: 'Sample Id', suffixIcon: 'numbers' };
  }
  name(): PropertyMetadata<ISampleView> {
    return {
      name: 'name',
      label: 'Sample Name',
      suffixIcon: 'info',
    };
  }

  override tableColumnNames(): TableFields<ISampleView> {
    return ['name', ...super.tableColumnNames()];
  }

  override propertyNames(): KeyOf<ISampleView>[] {
    return [this.name().name, this.sampleId().name, ...super.propertyNames()];
  }

  override tableColumns(): PropertyMetadata<ISampleView>[] {
    return [this.name(), this.sampleId(), ...super.tableColumns()];
  }
}
