import { ICreateImageDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const ImageFormBuilder = new FormGroupBuilder<ICreateImageDto>(
  'Image Form'
)
  .add('name')
  .required()
  .shortText()

  .add('url')
  .url()
  .required()

  .done()
  .lock();
