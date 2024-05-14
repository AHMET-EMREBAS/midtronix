import { ICreateUserAddressDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const UserAddressFormBuilder =
  new FormGroupBuilder<ICreateUserAddressDto>('UserAddress Form')
    .add('street')
    .required()
    .shortText()

    .add('city')
    .required()
    .shortText()

    .add('state')
    .required()
    .shortText()

    .add('zip')
    .required()
    .shortText()

    .add('owner')
    .required()

    .done()
    .lock();
