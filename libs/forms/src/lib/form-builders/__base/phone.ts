import { ICreatePhoneDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const PhoneFormBuilder = new FormGroupBuilder<ICreatePhoneDto>(
  'Phone Form'
)
  .add('phone')
  .phone()
  .required()
  
  .add('owner')
  .required()

  .done()
  .lock();
