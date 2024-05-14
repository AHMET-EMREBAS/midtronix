import { ICreateUserDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const UserFormBuilder = new FormGroupBuilder<ICreateUserDto>('User Form')

  .add('username')
  .required()
  .email()

  .add('password')
  .required()
  .password()

  .add('roles')
  .required()

  .done()
  .lock();
