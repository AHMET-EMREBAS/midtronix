import { ICreateCustomerRoleDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const CustomerRoleFormBuilder =
  new FormGroupBuilder<ICreateCustomerRoleDto>('CustomerRole Form')
    .add('name')
    .shortText()
    .required()

    .add('permissions')

    .done()
    .lock();
