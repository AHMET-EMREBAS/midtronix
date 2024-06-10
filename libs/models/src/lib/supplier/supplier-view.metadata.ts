import {
  EntityMetadata,
  PropertyMetadata,
  BaseViewMetadata,
  TableFields,
  KeyOf,
} from '@mdtx/common';
import { ISupplierView } from './supplier-view';

export class SupplierViewMetadata
  extends BaseViewMetadata<ISupplierView>
  implements EntityMetadata<ISupplierView>
{
  supplierId(): PropertyMetadata<ISupplierView> {
    return { name: 'supplierId', label: 'Supplier Id', suffixIcon: 'numbers' };
  }
  name(): PropertyMetadata<ISupplierView> {
    return {
      name: 'name',
      label: 'Supplier Name',
      suffixIcon: 'info',
    };
  }

  override tableColumnNames(): TableFields<ISupplierView> {
    return ['name', ...super.tableColumnNames()];
  }

  override propertyNames(): KeyOf<ISupplierView>[] {
    return [this.name().name, this.supplierId().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<ISupplierView>[] {
    return [this.name(), this.supplierId(), ...super.columns()];
  }
}
