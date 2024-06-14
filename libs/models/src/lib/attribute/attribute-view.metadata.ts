import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { IAttributeView } from './attribute-view';

export class AttributeViewMetadata
  extends BaseViewMetadata<IAttributeView>
  implements EntityMetadata<IAttributeView>
{
  sku(): PropertyMetadata<IAttributeView> {
    return {
      name: 'sku',
      label: 'Sku',
      type: 'string',
      order: 301,
    };
  }
  skuId(): PropertyMetadata<IAttributeView> {
    return {
      name: 'skuId',
      label: 'Skuid',
      type: 'string',
      order: 302,
    };
  }

  skuName(): PropertyMetadata<IAttributeView> {
    return {
      name: 'skuName',
      label: 'Skuname',
      type: 'string',
      order: 303,
    };
  }

  key(): PropertyMetadata<IAttributeView> {
    return {
      name: 'key',
      label: 'Key',
      order: 201,
    };
  }

  value(): PropertyMetadata<IAttributeView> {
    return {
      name: 'value',
      label: 'Value',
      order: 202,
    };
  }

  eid(): PropertyMetadata<IAttributeView> {
    return {
      name: 'eid',
      label: 'Attribute Id',
      suffixIcon: 'numbers',
      order: 245,
    };
  }

  override propertyNames(): KeyOf<IAttributeView>[] {
    return [
      this.key().name,
      this.value().name,
      this.skuId().name,
      this.skuName().name,
      this.sku().name,
      this.eid().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<IAttributeView>[] {
    return [
      this.key(),
      this.value(),
      this.eid(),
      this.skuId(),
      this.skuName(),
      this.sku(),
      ...super.columns(),
    ];
  }
}
