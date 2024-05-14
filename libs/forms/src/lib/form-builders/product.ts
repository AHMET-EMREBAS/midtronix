import { ICreateProductDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const ProductFormBuilder = new FormGroupBuilder<ICreateProductDto>(
  'Product Form'
)
  .add('name')
  .required()
  .shortText()

  .add('upc')
  .required()
  .ean()

  .add('description')
  .longText()

  .add('category')

  .add('department')

  .add('manufacturers')

  .done()
  .lock();
