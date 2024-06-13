import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  KeyOf,
} from '@mdtx/common';
import { ISupplierView } from './supplier-view';

export class SupplierViewMetadata
  extends BaseViewMetadata<ISupplierView>
  implements EntityMetadata<ISupplierView>
{
  supplierId(): PropertyMetadata<ISupplierView> {
    return {
      name: 'supplierId',
      label: 'Supplier Id',
      suffixIcon: 'numbers',
      order: 200,
    };
  }

  override propertyNames(): KeyOf<ISupplierView>[] {
    return [
      this.name().name,
      this.description().name,
      this.supplierId().name,
      ...super.propertyNames(),
    ];
  }

  override columns(): PropertyMetadata<ISupplierView>[] {
    return [
      this.name(),
      this.description(),
      this.supplierId(),
      ...super.columns(),
    ];
  }
}
