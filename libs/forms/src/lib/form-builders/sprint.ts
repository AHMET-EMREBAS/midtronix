import { ICreateSprintDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const SprintFormBuilder = new FormGroupBuilder<ICreateSprintDto>(
  'Sprint Form'
)
  .add('name')
  .required()
  .shortText()

  .add('description')
  .longText()

  .add('project')

  .done()
  .lock();
