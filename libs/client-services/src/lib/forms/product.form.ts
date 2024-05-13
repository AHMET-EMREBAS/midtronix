import { ICreateProductDto } from '@mdtx/common';
import { FormType } from '../__base/form-type';
import { FormControl, FormGroup } from '../__externals';
import { DescriptionForm } from '../__base';
import { InputValidator } from '@mdtx/material/core';

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
}
