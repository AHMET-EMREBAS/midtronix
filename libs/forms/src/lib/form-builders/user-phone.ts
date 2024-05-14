import { ICreateUserPhoneDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const UserPhoneFormBuilder = new FormGroupBuilder<ICreateUserPhoneDto>(
  'UserPhone Form'
)
  .add('phone')
  .required()
  .phone()

  .done()
  .lock();
