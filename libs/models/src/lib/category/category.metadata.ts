import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  KeyOf,
} from '@mdtx/common';
import { ICategory } from './category';

export class CategoryMetadata
  extends BaseEntityMetadata<ICategory>
  implements EntityMetadata<ICategory>
{
  override propertyNames(): KeyOf<ICategory>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override columns(): PropertyMetadata<ICategory>[] {
    return [this.name(), ...super.columns()];
  }

  protected override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
