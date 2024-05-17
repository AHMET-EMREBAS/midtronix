import { ICreateCustomerPermissionDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerPermissionFormBuilder =
  new FormGroupBuilder<ICreateCustomerPermissionDto>('CustomerPermission Form')
    .add('name')
    .shortText()
    .required()

    .done()
    .lock();
