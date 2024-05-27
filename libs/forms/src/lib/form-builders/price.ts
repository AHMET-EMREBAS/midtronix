import { ICreatePriceDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const PriceFormBuilder = new FormGroupBuilder<ICreatePriceDto>(
  'Price Form'
)

  .add('priceLevel')
  .required()

  .add('price')
  .required()
  .min(0)

  .add('cost')
  .required()
  .min(0)

  .done()
  .lock();
