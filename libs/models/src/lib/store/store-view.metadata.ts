import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IStoreView } from './store-view';

export class StoreViewMetadata
  extends BaseViewMetadata<IStoreView>
  implements EntityMetadata<IStoreView>
{
  storeId(): PropertyMetadata<IStoreView> {
    return {
      name: 'storeId',
      label: 'Store Id',
      suffixIcon: 'numbers',
      order: 200,
    };
  }

  override propertyNames(): KeyOf<IStoreView>[] {
    return [this.name().name, this.storeId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<IStoreView>[] {
    return [this.name(), this.storeId(), ...super.columns()];
  }
}
