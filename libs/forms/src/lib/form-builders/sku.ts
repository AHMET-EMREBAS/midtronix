import { ICreateSkuDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const SkuFormBuilder = new FormGroupBuilder<ICreateSkuDto>('Sku Form')
  .add('name')
  .required()
  .shortText()

  .add('upc')
  .required()
  .ean()

  .add('description')
  .longText()

  .add('product')
  .required()

  .done()
  .lock();
