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
  category(): PropertyMetadata<ISampleView> {
    return {
      name: 'category',
      label: 'Category',
      suffixIcon: 'category',
    };
  }
  sampleId(): PropertyMetadata<ISampleView> {
    return { name: 'sampleId', label: 'Sample Id', suffixIcon: 'numbers' };
  }

  override tableColumnNames(): TableFields<ISampleView> {
    return ['name', ...super.tableColumnNames()];
  }

  override propertyNames(): KeyOf<ISampleView>[] {
    return [this.name().name, this.sampleId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<ISampleView>[] {
    return [this.name(), this.sampleId(), ...super.columns()];
  }
}
