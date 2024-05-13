import { ICreateProductDto } from '@mdtx/common';
import { InputValidator } from '@mdtx/material/core';
import { FormType, DescriptionForm } from '../__base';
import { FormControl, FormGroup } from '../__externals';

export class ProductForm
  extends DescriptionForm
  implements FormType<ICreateProductDto>
{
  readonly category = new FormControl(
    '',
    InputValidator.create('category').required(this.required).build()
  );

  readonly department = new FormControl(
    '',
    InputValidator.create('department').required(this.required).build()
  );

  readonly manufacturers = new FormControl(
    '',
    InputValidator.create('manufacturers').required(this.required).build()
  );

  readonly upc = new FormControl(
    '',
    InputValidator.create('upc')
      .required(this.required)
      .minLength(10)
      .maxLength(14)
      .build()
  );

  static formGroup(required = true): FormGroup {
    const { category, department, description, manufacturers, name, upc } =
      new ProductForm(required);
    return new FormGroup({
      name,
      description,
      upc,
      category,
      department,
      manufacturers,
    });
  }
}
