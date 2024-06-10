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
  name(): PropertyMetadata<ICategory> {
    return {
      name: 'name',
      label: 'Name',
      type: 'string',
      inputType: 'text',
      required: true,
      minlength: 3,
      maxlength: 50,
      order: 201,
    };
  }
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
