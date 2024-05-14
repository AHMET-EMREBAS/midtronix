import { ICreateProjectDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const ProjectFormBuilder = new FormGroupBuilder<ICreateProjectDto>(
  'Project Form'
)
  .add('name')
  .required()
  .shortText()

  .add('description')
  .longText()

  .done()
  .lock();
