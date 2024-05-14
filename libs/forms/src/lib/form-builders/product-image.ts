import { ICreateProductImageDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const ProductImageFormBuilder =
  new FormGroupBuilder<ICreateProductImageDto>('ProductImage Form')
    .add('name')
    .required()
    .shortText()

    .add('url')
    .required()
    .url()

    .done()
    .lock();
