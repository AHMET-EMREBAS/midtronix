import { ICreateNotificationDto } from '@mdtx/common';
import { FormGroupBuilder } from '@mdtx/material/core';

export const NotificationFormBuilder =
  new FormGroupBuilder<ICreateNotificationDto>('Notification Form')

    .add('message')
    .required()
    .longText()

    .add('source')
    .required()

    .add('target')
    .required()

    .done()
    .lock();
