import { ICreatePriceDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const PriceFormBuilder = new FormGroupBuilder<ICreatePriceDto>(
  'Price Form'
)
  .add('name')
  .required()
  .shortText()
  .done()
  .lock();
