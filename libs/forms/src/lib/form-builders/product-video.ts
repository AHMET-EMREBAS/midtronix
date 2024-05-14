import { ICreateProductVideoDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const ProductVideoFormBuilder =
  new FormGroupBuilder<ICreateProductVideoDto>('ProductVideo Form')
    .add('name')
    .required()
    .shortText()

    .add('url')
    .required()
    .url()

    .done()
    .lock();
