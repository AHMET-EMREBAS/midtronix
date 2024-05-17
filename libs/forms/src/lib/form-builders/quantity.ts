import { ICreateQuantityDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const QuantityFormBuilder = new FormGroupBuilder<ICreateQuantityDto>(
  'Quantity Form'
)
  .add('quantity')
  .required()
  .min(0)

  .add('sku')
  .required()
  
  .add('store')
  .required()

  .done()
  .lock();
