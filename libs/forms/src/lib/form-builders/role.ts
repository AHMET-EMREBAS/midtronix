import { ICreateRoleDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const RoleFormBuilder = new FormGroupBuilder<ICreateRoleDto>('Role Form')
  .add('name')
  .required()
  .shortText()

  .add('permissions')

  
  .done()
  .lock();
