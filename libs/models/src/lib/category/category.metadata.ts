import {
  EntityMetadata,
  PropertyMetadata,
  BaseEntityMetadata,
  TableFields,
  KeyOf,
  ValidatorBuilder,
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
      control: [
        '',
        new ValidatorBuilder('name').minLength(3).maxLength(50).build(),
      ],
    };
  }

  override propertyNames(): KeyOf<ICategory>[] {
    return [this.name().name, ...super.propertyNames()];
  }

  override tableColumnNames(): TableFields<ICategory> {
    return [...super.tableColumnNames()];
  }

  override columns(): PropertyMetadata<ICategory>[] {
    return [this.name(), ...super.columns()];
  }

  override formFields() {
    return [this.name(), ...super.formFields()];
  }
}
