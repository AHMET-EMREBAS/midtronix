import { ICreateMessageDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const MessageFormBuilder = new FormGroupBuilder<ICreateMessageDto>(
  'Message Form'
)

  .add('message')
  .required()
  .longText()

  .add('source')
  .required()

  .add('target')
  .required()

  .done()
  .lock();
