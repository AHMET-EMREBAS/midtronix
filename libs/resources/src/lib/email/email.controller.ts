import { CreateBasicController, RestRouteBuilder } from '@mdtx/core';
import {
  Email,
  CreateEmailDto,
  UdpateEmailDto,
  EmailQueryDto,
} from '@mdtx/entities';
import { EmailService } from './email.service';

import { ApiVersion } from '@mdtx/common';

export const EmailRRB = RestRouteBuilder.get(Email.name, ApiVersion.v1);

@EmailRRB.Controler()
export class EmailController extends CreateBasicController<
  Email,
  CreateEmailDto,
  UdpateEmailDto,
  EmailQueryDto
>(EmailRRB, Email, CreateEmailDto, UdpateEmailDto, EmailQueryDto) {
  constructor(service: EmailService) {
    super(service);
  }
}
