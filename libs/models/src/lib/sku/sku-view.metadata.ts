import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { ISkuView } from './sku-view';

export class SkuViewMetadata
  extends BaseViewMetadata<ISkuView>
  implements EntityMetadata<ISkuView>
{
  eid(): PropertyMetadata<ISkuView> {
    return { name: 'eid', label: 'Sku Id', suffixIcon: 'numbers', order: 245 };
  }

  override propertyNames(): KeyOf<ISkuView>[] {
    return [this.name().name, this.eid().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<ISkuView>[] {
    return [this.name(), this.eid(), ...super.columns()];
  }
}
