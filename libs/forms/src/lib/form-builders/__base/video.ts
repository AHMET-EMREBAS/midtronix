import { ICreateVideoDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const VideoFormBuilder = new FormGroupBuilder<ICreateVideoDto>(
  'Video Form'
)
  .add('name')
  .required()
  .shortText()

  .add('url')
  .required()
  .url()

  .done()
  .lock();
