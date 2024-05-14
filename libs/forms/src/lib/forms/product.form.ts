import { ICreateProductDto, IProduct } from '@mdtx/common';
import { ValidatorBuilder } from '@mdtx/material/core';
import { FormType, DescriptionForm } from '../__base';
import { FormControl, FormGroup } from '../__imports';

export class ProductForm
  extends DescriptionForm
  implements FormType<ICreateProductDto>
{
  readonly category = new FormControl(
    '',
    new ValidatorBuilder('category').required().build()
  );

  readonly upc = new FormControl(
    '',
    new ValidatorBuilder('upc').required().minLength(10).maxLength(14).build()
  );

  readonly department = new FormControl(
    '',
    new ValidatorBuilder('department').required().build()
  );

  readonly manufacturers = new FormControl(
    '',
    new ValidatorBuilder('manufacturers').required().build()
  );

  static formGroup(): FormGroup {
    const { category, department, description, manufacturers, name, upc } =
      new ProductForm();
    return new FormGroup({
      category,
      department,
      description,
      manufacturers,
      name,
      upc,
    });
  }

  static columns(): (keyof IProduct)[] {
    return [
      'id',
      'name',
      'upc',
      'description',
      'category',
      'department',
      'manufacturers',
      'createdAt',
      'updatedAt',
      'deletedAt',
    ];
  }

  static displayedColumns(): (keyof IProduct)[] {
    return ['id', 'name', 'upc', 'description', 'category', 'department'];
  }

  static controls(): FormType<ICreateProductDto> {
    const { name, upc, description, manufacturers, category, department } =
      new ProductForm();

    return { name, upc, description, manufacturers, category, department };
  }
}
