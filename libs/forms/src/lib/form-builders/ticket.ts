import { ICreateTicketDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const TicketFormBuilder = new FormGroupBuilder<ICreateTicketDto>(
  'Ticket Form'
)

  .add('name')
  .required()
  .shortText()

  .add('description')
  .longText()

  .add('difficulty')
  .range(1, 10)

  .add('due')
  .date()

  .add('startDate')
  .date()

  .add('finishDate')
  .date()

  .add('status')
  .shortText()

  .add('customer')
  .required()

  .add('assignees')

  .done()
  .lock();
